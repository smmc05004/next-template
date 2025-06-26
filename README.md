# next-template

이 프로젝트는 [Next.js](https://nextjs.org) 기반의 템플릿 프로젝트입니다.

## 프로젝트를 시작한 이유

이 프로젝트는 **git push → GitHub Actions → Docker build → EC2 배포**의 자동화된 배포 파이프라인을 구축하기 위해 시작되었습니다. 개발자가 코드를 push하면, 자동으로 빌드와 배포가 이루어지는 효율적인 환경을 만들고자 했습니다.

## 목표 달성을 위해 수행한 작업

- **GitHub Actions 워크플로우 구성**  
  코드가 push될 때 자동으로 테스트, 빌드, Docker 이미지 생성 및 EC2 배포가 이루어지도록 `.github/workflows/`에 워크플로우 파일을 작성했습니다.

- **Docker 환경 구축**  
  개발/운영 환경을 분리하여 `Dockerfile.dev`, `Dockerfile.prod`, `docker-compose.dev.yml`, `docker-compose.prod.yml`을 작성했습니다.  
  Next.js의 standalone 모드를 활용해 운영 환경에서 경량화된 이미지를 사용할 수 있도록 했습니다.

- **환경 변수 관리**  
  `.env.development`, `.env.production` 파일로 환경별 설정을 분리했습니다.

- **EC2 배포 자동화**  
  GitHub Actions에서 EC2로 Docker 이미지를 배포할 수 있도록 SSH 및 관련 스크립트 구성을 준비했습니다.

- **코드 품질 및 개발 편의성 향상**  
  ESLint, Tailwind CSS, Google Fonts(Geist) 등 최신 Next.js 개발 환경을 적용했습니다.

---

## 시작하기

개발 서버 실행:

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하면 결과를 확인할 수 있습니다.

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [Vercel Geist Font](https://vercel.com/font)

---
