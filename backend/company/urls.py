from django.urls import path
from . import views


urlpatterns = [
    path('companydetails_add/', views.AddCompanyDetails.as_view(), name="company-details-add"),
    path('details/', views.GetCompanyDetails.as_view(), name="company-details"),
    path('companydetails_update/', views.UpdateCompanyDetails.as_view(), name="company-details-update"),
    path('companydetails_delete/', views.DeleteCompanyDetails.as_view(), name="company-details-delete"),
    path('joboffers_add/', views.AddJoboffer.as_view(), name="job-offers-add"),
    path('job_offers/', views.GetJoboffers.as_view(), name="job-offers"),
    path('internship_offers_add/', views.AddInternshipoffer.as_view(), name="intern-offers-add"),
    path('internship_offers/', views.GetInternshipoffers.as_view(), name="intern-offers"),
    path('internship_ann_add/', views.AddInernshipAdvertisement.as_view(), name="intern-advertisement-add"),
    path('job_ann_add/', views.AddJobAdvertisement.as_view(), name="job-advertisement-add"),
    path('get_company_ann/', views.GetCompanyAnnouncements.as_view(), name="company-get-announcement"),
    path('get_applications/<slug:id>', views.GetAppliedStudents.as_view(), name="get-applications-of-ann")
]
