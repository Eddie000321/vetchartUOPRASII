# backend/Dockerfile

# --- 1. base image ---
# Node.js 18의 가벼운 버전을 기반으로 시작합니다.
FROM node:18-alpine

# --- 2. work dir ---
# 컨테이너 내부에 소스코드를 저장할 폴더를 만듭니다.
WORKDIR /usr/src/app

# --- 3. 의존성 설치 (캐싱 최적화) ---
# package.json과 package-lock.json을 먼저 복사합니다.
# 이 파일들이 변경되지 않으면, 도커는 이 단계를 캐시에서 가져와 빌드 속도를 높입니다.
COPY package*.json ./
RUN npm install

# --- 4. Prisma 클라이언트 생성 ---
# Prisma 스키마 파일을 복사하고, 데이터베이스에 맞는 클라이언트를 생성합니다.
COPY prisma ./prisma/
RUN npx prisma generate

# --- 5. 소스 코드 복사 ---
# 나머지 모든 소스 코드를 컨테이너에 복사합니다.
COPY . .

# --- 6. 포트 개방 ---
# 애플리케이션이 8000번 포트를 사용한다고 도커에 알립니다.
EXPOSE 8000

# --- 7. 애플리케이션 실행 ---
# 컨테이너가 시작될 때 실행할 명령어를 지정합니다.
CMD [ "npm", "run", "dev" ]