'use client';

import { Image, Text, Title } from '@mantine/core';
import { SiTelegram, SiGithub, SiApplemusic, SiDiscord, SiGit, SiVisualstudiocode } from 'react-icons/si';

import { Header } from '@/components/layout/Header';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import styles from './page.module.css';

/**
 * @description - The home page (/).
 * @return {JSX.Element} - The home page.
 */
export default function Home() {
  return (
    <>
      <Header />
      <title>Ryzen • zenithpaws.dev</title>
      <main className='m-0 flex items-center justify-center p-0'>
        <div className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[40rem] w-full p-0`}>
          <div className='relative size-full'>
            <div className={`${styles.gridInner} absolute size-full`}></div>
          </div>
        </div>

        <div className='relative mx-4 mt-8 box-border flex justify-between p-0 px-1 sm:mx-8 sm:mt-12 md:mt-20 lg:w-240 xl:w-330'>
          <div className={`${styles.slideFromLeft} md:ml-8 lg:mr-12 lg:mt-16`}>
            {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
            <Title className='mt-10 font-jakarta text-[1.9rem] font-medium tracking-normal text-primary antialiased sm:text-[3rem] md:text-[4rem] xl:text-[4.5rem]'>
              <span>Heya! I&#39;m </span>
              <span className={`${styles.name}`}>Ryzen</span>
            </Title>

            {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
            <Text className='mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:w-9/12 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
              A young <span className={`${styles.bolded}`}>Python developer</span> and <span className={`${styles.bolded}`}>tech enthusiast</span>
              <span> interested in</span> <span className={`${styles.bolded}`}>retro technology </span> and <span className={`${styles.bolded}`}>astronomy</span>
            </Text>

            <div className='mt-8 flex flex-row items-center md:mt-[3.25rem]'>
              {/* eslint-disable-next-line max-len */}
              <button className='mr-2 flex h-11 translate-y-0 items-center rounded-xl bg-accent-secondary px-3 transition-all hover:bg-accent-secondary-hover active:translate-y-px md:h-[3.25rem] md:px-5'>
                <div className='mb-1 ml-1'>
                  <HiOutlinePaperAirplane className='-rotate-45 items-center text-[16px] text-invert-secondary md:text-lg' />
                </div>
                <Text className='m-1 ml-1.5 font-jakarta text-sm font-medium tracking-wide text-invert-secondary md:text-[16px]'>Get in touch</Text>
              </button>
            </div>

            <div className={`${styles.techIcons} mt-24 md:mt-36`}>
              <Text className='font-jakarta text-[13px] text-primary'>My favorite tools and software</Text>
              <div className='mt-3 flex flex-row items-center gap-3 text-2xl text-secondary md:gap-4 md:text-[27px]'>
                <SiVisualstudiocode className={`${styles.techIcon} hover:text-[#00a1f1]`} />
                <a href='https://github.com/zenithpaws' target='_blank' rel='noopener noreferrer'>
                  <SiGithub className={`${styles.techIcon} hover:text-[#211F1F]`} />
                </a>
                <SiGit className={`${styles.techIcon} hover:text-[#f1502f]`} />
                <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
                <a href='https://discord.com/users/487638433179762688' target='_blank' rel='noopener noreferrer'>
                  <SiDiscord className={`${styles.techIcon} hover:text-[#5865F2]`} />
                </a>
                <a href='https://t.me/zenithpaws' target='_blank' rel='noopener noreferrer'>
                  <SiTelegram className={`${styles.techIcon} hover:text-[#27A7E7]`} />
                </a>
                <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
                <a href='https://music.apple.com/profile/zenithpaws' target='_blank' rel='noopener noreferrer'>
                  <SiApplemusic className={`${styles.techIcon} hover:text-[#f94c57]`} />
                </a>
              </div>
            </div>
          </div>
          <div className='absolute right-0 -z-50 hidden lg:block'>
            <Image
              styles={{
                image: {
                  borderRadius: '50%',
                  height: '320px',
                  objectFit: 'cover',
                  width: '320px',
                },
              }}
              alt='Developer'
              className='mt-16 !h-120 !w-120 rounded-full object-cover xl:-mt-4 xl:!h-[42rem] xl:!w-[42rem]'
              src='/kiro.png'
              width='100%'
            />
          </div>
        </div>
      </main>
    </>
  );
}
