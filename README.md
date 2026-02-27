# StudySutra
smart educational tool
# StudySutra

AI-powered study planner built with Next.js and NextAuth.

## 🚀 Setup Instructions

1. Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/StudySutra.git
```

2. Install dependencies:

```
npm install
```

3. Create a `.env.local` file in the root directory and add:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

4. Run the development server:

```
npm run dev
```

5. Open in browser:

```
http://localhost:3000
```

---

## 🔐 Authentication

This project uses:
- Google OAuth
- GitHub OAuth
via NextAuth.js