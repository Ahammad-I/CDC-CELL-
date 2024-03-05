from rest_framework import serializers
from django.contrib.auth.models import User
from .models import ProgramAndBranch, StudentProfile, Resume


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']


class ProgramAndBranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramAndBranch
        fields = '__all__'


class StudentProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    program_branch = ProgramAndBranchSerializer(read_only=True)

    class Meta:
        model = StudentProfile
        fields = '__all__'


class ResumeSerializer(serializers.ModelSerializer):
    student = StudentProfileSerializer(read_only=True)
    file = serializers.FileField()

    class Meta:
        model = Resume
        fields = '__all__'
