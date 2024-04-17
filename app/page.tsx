import Image from 'next/image';
import { get } from '@vercel/edge-config';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic',
  runtime = 'edge';

function TwitterIcon() {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v19.636H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M20.25 0H3.75C1.677 0 0 1.677 0 3.75V20.25C0 22.323 1.677 24 3.75 24H20.25C22.323 24 24 22.323 24 20.25V3.75C24 1.677 22.323 0 20.25 0ZM7.5 19.5H4.5V9H7.5V19.5ZM6 7.5C4.677 7.5 3.75 6.573 3.75 5.25C3.75 3.927 4.677 3 6 3C7.323 3 8.25 3.927 8.25 5.25C8.25 6.573 7.323 7.5 6 7.5ZM19.5 19.5H16.5V13.5C16.5 12.573 16.5 11.25 14.25 11.25C12 11.25 12 12.573 12 13.5V19.5H9V9H12V10.5C12.75 9.75 14.25 9.75 15 10.5V9H18L19.5 9V19.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function InstagramIcon() {
  return(
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C8.686 0 7.5 0.375 6.375 0.75C5.25 1.125 4.125 2.25 3 3.375C1.875 4.5 0.75 5.625 0.375 6.75C0 7.875 0 9.063 0 12C0 14.937 0 16.125 0.375 17.25C0.75 18.375 1.875 19.5 3 20.625C4.125 21.75 5.25 22.875 6.375 23.25C7.5 23.625 8.686 24 12 24C15.313 24 16.5 23.625 17.625 23.25C18.75 22.875 19.875 21.75 21 20.625C22.125 19.5 23.25 18.375 23.625 17.25C24 16.125 24 14.937 24 12C24 9.063 24 7.875 23.625 6.75C23.25 5.625 22.125 4.5 21 3.375C19.875 2.25 18.75 1.125 17.625 0.75C16.5 0.375 15.313 0 12 0ZM12 3.75C13.762 3.75 15.188 5.188 15.188 7.125C15.188 9.063 13.762 10.5 12 10.5C10.238 10.5 8.812 9.063 8.812 7.125C8.812 5.188 10.238 3.75 12 3.75ZM18.75 20.25C18.75 20.625 18.375 21 18 21H6C5.625 21 5.25 20.625 5.25 20.25V12C5.25 11.625 5.625 11.25 6 11.25H18C18.375 11.25 18.75 11.625 18.75 12V20.25ZM21 8.25C21 8.625 20.625 9 20.25 9H19.5C19.125 9 18.75 8.625 18.75 8.25V7.5C18.75 7.125 19.125 6.75 19.5 6.75H20.25C20.625 6.75 21 7.125 21 7.5V8.25Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}


function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

interface Data {
  name: string;
  role: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}

export default async function HomePage() {
  const data: Data ={
    name: 'Alex Casassovici',
    role: 'Founder of Azarus',
    avatar: 'https://avatars.githubusercontent.com/u/485530?v=4',
    links: [      
      {
        href: 'https://t.me/zatmonkey',
        title: 'Telegram',
        image: 'https://telegram.org/favicon.ico',
      },
      {
        href: 'https://wa.me/15304815776',
        title: 'Whatsapp',
        image: '/whatsapp.png',
      },
      { //text message me
        href: 'sms:15304815776?body=Hi%20Alex!%20This%20is%20...',
        title: 'Text Message',
        image: '/sms.webp',
      }, 
      {
        href: 'https://twitter.com/zatmonkey',
        title: 'Twitter (X)',
        image: 'https://abs.twimg.com/favicons/twitter.ico',
      },
      {
        href: 'https://www.instagram.com/zatmonkey',
        title: 'Instagram',
        image: 'https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico',
      },
      {
        href: 'https://www.linkedin.com/in/zatmonkey',
        title: 'LinkedIn',
        image: 'https://www.linkedin.com/favicon.ico',
      },{
        href: 'https://discordapp.com/users/398330043375550470',
        title: 'Discord',
        image: '/discord.png',
      },
      {
        href: 'https://zatmonkey.com',
        title: 'Personal Homepage',
        image: 'https://zatmonkey.com/favicon.ico',
      },
      {
        href: 'https://azarus.io',
        title: 'Azarus',
        image: 'https://azarus.io/favicon.ico',
      },
      {
        href: 'https://www.golucid.io',
        title: 'Lucid Invest',
        image: '/golucid.png',
      }
    ],
    socials: [],
  }


  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-1 text-xl text-white">{data.name}</h1>
      <h2 className="font-semibold text-lg text-white  mb-8">{data.role}</h2>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 text-white">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.href.includes('twitter') ? (
              <TwitterIcon />
            ) : social.href.includes('github') ? (
              <GitHubIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}
