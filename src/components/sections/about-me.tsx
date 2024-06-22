import Image from 'next/image';

import RushikFullPose from '/public/images/Rushik-Full-Pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={RushikFullPose}
              alt="Fullpose of Rushik"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6 text-justify">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a seasoned full-stack developer specializing in Next.js,
            React.js, and Node.js, with a knack for seamless database
            integration. Beyond development, I am enthusiastic about bringing
            the technical and visual aspects of digital products to life. User
            experience, pixel-perfect design, and writing clear, readable,
            highly performant code matters to me.
          </Typography>
          <Typography>
            I began my journey as a Software Engineering student (B.Tech IT) at
            Uka Tarsadia University, where I explored full stack development,
            Flutter development, and blockchain development. In my third year,my
            friends and I created a Flutter app called Greenity, which advanced
            us to the SSIP Hackathon finals. Following this, I completed a
            research internship in Blockchain Development, during which I built
            a web3 website named Blockchain-Based Decentralized Research Paper
            Publishing System and wrote a research paper on the project. Now, as
            a graduate with a B.Tech IT degree, I am officially a Software
            Engineer.
          </Typography>
          <Typography>
            Currently, as a Full Stack Developer, I&apos;m building futuristic
            and advanced websites using modern technologies such as Next.js,
            TypeScript, React.js, Redux, Tailwind CSS, Express.js, Supabase,
            PostgreSQL, Firebase, MongoDB, and many more.
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Tech in Information Technology
              </Typography>
              <Typography component="li">Freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Full Stack Developer</Typography>
              <Typography component="li">Avid Learner</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
