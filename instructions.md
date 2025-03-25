# How to Use Your Personal Website Source Code

This document provides instructions on how to use the source code for your personal website. The source code is provided as a zip file that contains all the necessary files to run and deploy your website on a platform of your choice.

## What's Included

The zip file contains:
- All source code files for your Next.js website
- Configuration files for Next.js, TypeScript, and Tailwind CSS
- Your CV in PDF format
- All custom components and pages

## Prerequisites

To work with this code, you'll need:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm or [pnpm](https://pnpm.io/) package manager

## Getting Started

1. Extract the zip file to a directory on your computer
2. Open a terminal and navigate to the extracted directory
3. Install dependencies:
   ```
   npm install
   ```
   or if you prefer pnpm:
   ```
   pnpm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   pnpm dev
   ```
5. Open your browser and navigate to `http://localhost:3000` to see your website

## Making Changes

You can edit the following files to customize your website:

- `src/app/page.tsx` - Home page
- `src/app/about/page.tsx` - About page
- `src/app/experience/page.tsx` - Experience page
- `src/app/publications/page.tsx` - Publications page
- `src/app/skills/page.tsx` - Skills page
- `src/app/projects/page.tsx` - Projects page
- `src/app/transition/page.tsx` - Career transition page
- `src/app/contact/page.tsx` - Contact page
- `src/components/layout/Navbar.tsx` - Navigation bar
- `src/components/layout/Footer.tsx` - Footer
- `src/app/globals.css` - Global styles

## Deploying Your Website

### Option 1: Vercel (Easiest)

1. Create an account on [Vercel](https://vercel.com/)
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Run the following command in your project directory:
   ```
   vercel
   ```
4. Follow the prompts to deploy your website

### Option 2: Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Build your website:
   ```
   npm run build
   ```
3. Deploy the `out` directory to Netlify using their drag-and-drop interface or CLI

### Option 3: GitHub Pages

1. Create a GitHub repository
2. Push your code to the repository
3. Set up GitHub Pages to deploy from the `out` directory

## Purchasing a Custom Domain

If you want a custom domain (e.g., touficmayassi.com):

1. Purchase a domain from a registrar like [Namecheap](https://www.namecheap.com/), [GoDaddy](https://www.godaddy.com/), or [Google Domains](https://domains.google/)
2. Configure the DNS settings to point to your hosting provider (Vercel, Netlify, etc.)
3. Set up the custom domain in your hosting provider's dashboard

## Need Help?

If you need assistance with using this code or deploying your website, feel free to:
- Refer to the [Next.js documentation](https://nextjs.org/docs)
- Consult the documentation of your chosen hosting provider
- Reach out to a web developer for professional assistance

## Removing the Current Deployment

While I don't have direct access to remove the current deployment at https://koedwvpi.manus.space, you can simply not share this URL and instead direct people to your new deployment once it's set up with your preferred hosting provider.
