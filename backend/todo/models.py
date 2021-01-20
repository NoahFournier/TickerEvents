from django.db import models

import logging
import logging.config
logging.config.fileConfig('logging.conf')
logger = logging.getLogger('applog')
def Test(str):
    logger.debug(str)


# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

    def save(self, *args, **kwargs):
        Test("test gere")
        super(Todo, self).save(*args, **kwargs)