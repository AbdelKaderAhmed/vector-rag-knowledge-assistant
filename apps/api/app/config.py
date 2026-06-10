from pydantic_settings import BaseSettings
from pydantic import Field

class Settings(BaseSettings):
    APP_NAME: str = "Vector RAG Assistant"
    DEBUG: bool = True
    # إضافة المتغير هنا يخبر Pydantic أن هذا الحقل متوقع
    GROQ_API_KEY: str = Field(..., env="GROQ_API_KEY")

    class Config:
        env_file = ".env"

settings = Settings()