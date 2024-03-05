from django.shortcuts import get_object_or_404
from student.models import ProgramAndBranch
from django.contrib.auth.models import User
from rest_framework.response import Response
from .serializers import CompanyProfileSerializer, InternshipAdvertisementSerializer_c, InternshipOfferSerializer
from .serializers import InternshipOfferSerializer_c, JobAdvertisementSerializer_c, JobOfferSerializer, JobOfferSerializer_c
from .models import CompanyProfile, InternshipAdvertisement, InternshipOffer, JobAdvertisement, JobOffer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser


class AddCompanyDetails(APIView):

    def post(self, request, *args, **kwargs):
        data = {}
        for key in request.data.keys():
            data[key] = request.data.get(key)
            if request.data.get(key) == '':
                return Response({'Error': 'Data Input Incorrect'}, status=status.HTTP_400_BAD_REQUEST)
        email = data.pop('email')
        password = data.pop('password')
        data.pop('cpassword')
        try:
            user = User.objects.get(email=email)
            return Response({'Error': 'User Alreday Exists'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            user = User.objects.create(email=email, username=email)
            user.set_password(password)
            user.save()
            profile = CompanyProfile.objects.create(user=user, **data)
            profile.save()
            return Response(CompanyProfileSerializer(profile).data, status=status.HTTP_201_CREATED)

    def get(self, request):
        model = CompanyProfile.objects.get(user=request.user)
        serializer = CompanyProfileSerializer(model)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GetCompanyDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        user = request.user
        profile = CompanyProfile.objects.filter(user=user)
        serializer = CompanyProfileSerializer(profile, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UpdateCompanyDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def put(self, request, *args, **kwargs):
        serializer = CompanyProfileSerializer(instance=request.user, data=request.data)
        data = {}
        for key in request.data.keys():
            data[key] = request.data.get(key)
        user = request.user
        user.first_name = data.pop('first_name')
        user.last_name = data.pop('last_name')
        user.save()
        job_offers = data.pop('job_offers')
        internship_offers = data.pop('internship_offers')
        _ = CompanyProfile.objects.filter(user=user).update(**data, job_offers=JobOffer.objects.get(name=job_offers['profile']),
                                                            internship_offers=InternshipOffer.objects.get(name=internship_offers['profile']))
        profile = CompanyProfile.objects.filter(user=user)[0]
        profile.save()

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteCompanyDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request, *args, **kwargs):
        user = request.user
        profile = CompanyProfile.objects.get(user=user)
        fucntion = profile.delete()
        data = {}
        if fucntion:
            data["status"] = "Successfully deleted profile"
        else:
            data["status"] = "Failed to delete profile"
        return Response(data=data)


class AddJoboffer(APIView):
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser,)

    def post(self, request, format=None):
        serializer = JobOfferSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(company=CompanyProfile.objects.get(user=request.user))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetJoboffers(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        job_offers = JobOffer.objects.filter(company__user=request.user)
        serializer = JobOfferSerializer(job_offers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AddInternshipoffer(APIView):
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser,)

    def post(self, request, format=None):
        serializer = InternshipOfferSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(company=CompanyProfile.objects.get(user=request.user))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetInternshipoffers(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        internship_offers = InternshipOffer.objects.filter(company__user=request.user)
        serializer = InternshipOfferSerializer(internship_offers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AddInernshipAdvertisement(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        data = {}
        for key in request.data.keys():
            if request.data.get(key) == 'true':
                data[key] = True
            elif request.data.get(key) == 'false':
                data[key] = False
            else:
                data[key] = request.data.get(key)
        selected_branches = data.pop('selectedBraches')
        sb = []
        dt = selected_branches.split(',')
        for i in range(1, len(dt), 2):
            if dt[i] == 'true':
                sb.append(ProgramAndBranch.objects.get(id=int(dt[i-1])))
        company = get_object_or_404(CompanyProfile, user=request.user)
        # print(data)
        mod = InternshipAdvertisement.objects.create(**data, company=company)
        mod.eligible_program_branch.set(sb)
        return Response(status=status.HTTP_201_CREATED)


class AddJobAdvertisement(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        data = {}
        for key in request.data.keys():
            if request.data.get(key) == 'true':
                data[key] = True
            elif request.data.get(key) == 'false':
                data[key] = False
            else:
                data[key] = request.data.get(key)
        selected_branches = data.pop('selectedBraches')
        sb = []
        dt = selected_branches.split(',')
        for i in range(1, len(dt), 2):
            if dt[i] == 'true':
                sb.append(ProgramAndBranch.objects.get(id=int(dt[i-1])))
        company = get_object_or_404(CompanyProfile, user=request.user)
        # print(data)
        mod = JobAdvertisement.objects.create(**data, company=company)
        mod.eligible_program_branch.set(sb)
        return Response(status=status.HTTP_201_CREATED)


class GetCompanyAnnouncements(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        intern = InternshipAdvertisement.objects.filter(company__user=request.user)
        intern = InternshipAdvertisementSerializer_c(intern, many=True)
        job = JobAdvertisement.objects.filter(company__user=request.user)
        job = JobAdvertisementSerializer_c(job, many=True)
        return Response({'internship': intern.data, 'job': job.data}, status=status.HTTP_200_OK)


class GetAppliedStudents(APIView):
    def get(self, request, id):
        model = InternshipOffer.objects.filter(profile__id=id)
        if not model.exists():
            model = JobOffer.objects.filter(profile__id=id)
            data = JobOfferSerializer_c(model, many=True).data
        else:
            data = InternshipOfferSerializer_c(model, many=True).data
        return Response(data, status=status.HTTP_200_OK)
