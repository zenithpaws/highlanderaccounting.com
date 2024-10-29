'use client';

import { Text, Title } from '@mantine/core';
import { SiInstagram, SiModrinth, SiLinktree, SiMastodon, SiTiktok, SiYoutube, SiTwitter, SiTwitch, SiTelegram, SiGithub, SiApplemusic, SiDiscord, SiLastdotfm, SiXbox, SiEpicgames, SiReddit, SiSteam } from 'react-icons/si';

import { Header } from '@/components/layout/Header';
import styles from './page.module.css';

/**
 * @description - Contact page (/contact).
 * @return {JSX.Element} - Contact page.
 */

const Contact = () => {
  return (
    <>
      <Header />
      <title>Ryzen • Where you can find me</title>
      <main className='m-0 flex items-center justify-center p-0'>
        <div className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[40rem] w-full p-0`}>
          <div className='relative size-full'>
            <div className={`${styles.gridInner} absolute size-full`}></div>
          </div>
        </div>

        <div className='relative mx-4 mt-8 box-border flex flex-col items-start gap-8 p-0 px-1 sm:mx-8 sm:mt-12 md:mt-20 md:flex-row lg:w-240 xl:w-330'>
          <div className={`${styles.slideFromLeft} flex-1 md:ml-8 lg:mr-12 lg:mt-16`}>
            {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
            <Title className='mt-10 font-jakarta text-[1.9rem] font-medium tracking-normal text-primary antialiased sm:text-[3rem] md:text-[4rem] xl:text-[4.5rem]'>
              <span>Where you can find me</span>
            </Title>

            {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
            <Text className='mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:w-9/12 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
              You can find me on <span className={`${styles.bolded}`}> Discord</span>, <span className={`${styles.bolded}`}>Telegram</span>, <span className={`${styles.bolded}`}>X/Twitter</span>,{' '}
              <span className={`${styles.bolded}`}>Mastodon</span> and more!
            </Text>
          </div>

          <div className='mt-24 flex w-full flex-col md:w-auto'>
            <Text className='mb-3 font-jakarta text-[13px] text-primary'>Platforms</Text>
            <div className='flex flex-row flex-wrap items-center gap-3 text-2xl text-secondary md:gap-4 md:text-[27px]'>
              <a href='https://linktr.ee/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiLinktree className={`${styles.techIcon} hover:text-[#43e660]`} />
              </a>
              <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
              <a href='https://discord.com/users/487638433179762688' target='_blank' rel='noopener noreferrer'>
                <SiDiscord className={`${styles.techIcon} hover:text-[#5865F2]`} />
              </a>
              <a href='https://t.me/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiTelegram className={`${styles.techIcon} hover:text-[#27A7E7]`} />
              </a>
              <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
              <a href='https://instagram.com/zenithpaw' target='_blank' rel='noopener noreferrer'>
                <SiInstagram className={`${styles.techIcon} hover:text-[#C13584]`} />
              </a>
              <a href='https://x.com/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiTwitter className={`${styles.techIcon} hover:text-[#1D9BF0]`} />
              </a>
              <a href='https://yip.gay/@zenithpaws' target='_blank' rel='me noopener noreferrer'>
                <SiMastodon className={`${styles.techIcon} hover:text-[#5e52ec]`} />
              </a>
              <a href='https://reddit.com/u/lilkittenebula' target='_blank' rel='noopener noreferrer'>
                <SiReddit className={`${styles.techIcon} hover:text-[#FF4500]`} />
              </a>
              <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
              <a href='https://youtube.com/@zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiYoutube className={`${styles.techIcon} hover:text-[#FF0000]`} />
              </a>
              <a href='https://twitch.tv/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiTwitch className={`${styles.techIcon} hover:text-[#9146FF]`} />
              </a>
              <a href='https://tiktok.com/@zenithpaws23' target='_blank' rel='noopener noreferrer'>
                <SiTiktok className={`${styles.techIcon} hover:text-[#FE2C55]`} />
              </a>
              <a href='https://music.apple.com/profile/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiApplemusic className={`${styles.techIcon} hover:text-[#f94c57]`} />
              </a>
              <a href='https://www.last.fm/user/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiLastdotfm className={`${styles.techIcon} hover:text-[#c3000d]`} />
              </a>
              <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
              <a href='https://github.com/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiGithub className={`${styles.techIcon} hover:text-[#211F1F]`} />
              </a>
              <a href='https://modrinth.com/user/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiModrinth className={`${styles.techIcon} hover:text-[#1bd96a]`} />
              </a>
              <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
              <a href='https://steamcommunity.com/id/zenithpaws/' target='_blank' rel='noopener noreferrer'>
                <SiSteam className={`${styles.techIcon} hover:text-[#2a475e]`} />
              </a>
              <a href='https://www.xbox.com/en-US/play/user/ZenithPaws' target='_blank' rel='noopener noreferrer'>
                <SiXbox className={`${styles.techIcon} hover:text-[#0e7a0d]`} />
              </a>
              <a href='https://store.epicgames.com/u/e00f7f9af8654a38b4b5ff5af5ead3d4' target='_blank' rel='noopener noreferrer'>
                <SiEpicgames className={`${styles.techIcon} hover:text-[#211F1F]`} />
              </a>
              <a href='https://store.epicgames.com/en-US/u/54a88855b8f74709a32b78a2c4dbf1da' target='_blank' rel='noopener noreferrer'>
                <SiEpicgames className={`${styles.techIcon} hover:text-[#211F1F]`} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Contact;
