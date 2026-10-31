# biblioHackDay

Prototype of a quiz app for university courses, built during a hackathon in May 2025.

This repository is archived and kept for reference; it is not maintained.

## What it was

UniQuizMib is a study app: students browse their courses, take multiple-choice quizzes, check a leaderboard and manage a profile. The prototype has two parts, both with static sample data and no backend, authentication or persistence:

- HTML mockups of the screens, under the working name "QuizMaster". On the quiz page a small script has the mascot "Mr. Bico" comment on the selected answer.
- A React Native app in [`UniQuizMib/`](UniQuizMib/) that turns part of the mockups into real screens: an onboarding carousel, then tabs for dashboard, courses, leaderboard and profile (with an edit page). A sample quiz screen exists at `quiz/1` under the courses tab but nothing links to it.

Some of the mockup commits were made with Google's Jules coding agent, as the history shows.

## What is inside

| Path | Content |
| --- | --- |
| `welcome.html`, `signup.html`, `forgot-password.html` | Login, sign-up and password reset |
| `dashboard.html`, `courses.html`, `quiz.html` | Home, course list, quiz with the "Mr. Bico" feedback |
| `leaderboard.html`, `profile.html`, `edit-profile.html` | Ranking, profile and quiz history, profile editing |
| `chat.html` | Support chatbot mockup |
| `UniQuizMib/` | Expo app (SDK 53, React Native 0.79, React 19, TypeScript 5.8, Expo Router with typed routes), targeting Android, iOS and web |

## View the mockups

Open any of the HTML files in a browser, for example `welcome.html` or `dashboard.html`; they link to each other. They load Tailwind CSS, Google Fonts and some images from CDNs, so they need an internet connection.

## Run the app

Requires Node.js and npm (checked with Node.js 26.8 and npm 12.2). The lockfile is `package-lock.json`, so use npm:

```bash
cd UniQuizMib
npm ci
npm start      # Expo dev server: open on a device with Expo Go, or press a / i / w
npm run web    # or start directly in the browser
```

## Limitations

This is a hackathon prototype. All data is hard-coded, the buttons on the dashboard do nothing, and the sample quiz screen uses Tailwind `className` styles without NativeWind installed, so it renders unstyled and `npx tsc --noEmit` reports type errors there and in the profile screen. `npx expo export --platform web` builds successfully.
