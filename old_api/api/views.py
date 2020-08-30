from rest_framework import viewsets
from . import serializers
from . import models 

# Create your views here.
class ProjectViewset(viewsets.ModelViewSet):
    serializer_class = serializers.ProjectSerializer
    queryset = models.Project.objects.all()


class CommandViewset(viewsets.ModelViewSet):
    serializer_class = serializers.CommandSerializer
    queryset = models.Command.objects.all()


class PlaybookViewset(viewsets.ModelViewSet):
    serializer_class = serializers.PlaybookSerializer
    queryset = models.Playbook.objects.all()


class AnsibleConfViewset(viewsets.ModelViewSet):
    serializer_class = serializers.AnsibleConfigurationSerializer
    queryset = models.AnsibleConfiguration.objects.all()


class HostViewset(viewsets.ModelViewSet):
    serializer_class = serializers.HostSerializer
    queryset = models.Host.objects.all()


class RoleViewset(viewsets.ModelViewSet):
    serializer_class = serializers.RoleSerializer
    queryset = models.Role.objects.all()


class OutputViewset(viewsets.ModelViewSet):
    serializer_class = serializers.OutputSerializer
    queryset = models.Output.objects.all()