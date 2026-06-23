import foam
import os

foam.init(
    service_name="document-processor",
    api_key=os.getenv("FOAM_API_KEY"),
    environment="production" if os.getenv("ENV") == "prod" else "development",
)
