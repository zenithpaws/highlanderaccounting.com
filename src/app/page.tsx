'use client';

import { Image, Text, Title } from '@mantine/core';

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
      <title>Highlander Accounting</title>
      <main className='m-0 flex items-center justify-center p-0'>
        <div className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[40rem] w-full p-0`}>
          <div className='relative size-full'>
            <div className={`${styles.gridInner} absolute size-full`}></div>
          </div>
        </div>

        <div className='relative mx-4 mt-8 box-border flex justify-between p-0 px-1 sm:mx-8 sm:mt-12 md:mt-20 lg:w-240 xl:w-330'>
          <div className={`${styles.slideFromLeft} md:ml-8 lg:mr-12 lg:mt-16`}>
            <Title className='mt-20 font-jakarta text-[1.9rem] font-medium tracking-normal text-primary antialiased sm:text-[3rem] md:text-[4rem] xl:text-[4.5rem]'>
              What is <span className={`${styles.name}`}>Highlander Accounting</span>?
            </Title>

            <Text className='md:w-9/16 mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
              <span className={`${styles.bolded}`}>Highlander Accounting</span> is a multiservice accounting firm specializing in Tax Exempt (Non-Profit) entitles, individuals, and small business.
            </Text>

            <div className='mt-8 flex flex-row items-center md:mt-[3.25rem]'>
              <a href='https://www.encyro.com/highlanderaccounting' target='_blank' rel='noopener noreferrer'>
                <button className='mr-2 flex h-11 translate-y-0 items-center rounded-xl bg-accent-secondary px-3 transition-all hover:bg-accent-secondary-hover active:translate-y-px md:h-[3.25rem] md:px-5'>
                  <div className='mb-1 ml-1'>
                    <HiOutlinePaperAirplane className='-rotate-45 items-center text-[16px] text-invert-secondary md:text-lg' />
                  </div>
                  <Text className='m-1 ml-1.5 font-jakarta text-sm font-medium tracking-wide text-invert-secondary md:text-[16px]'>Get in touch</Text>
                </button>
              </a>
            </div>
          </div>
          <div className='-z-50 hidden lg:block'>
            <Image
              styles={{
                image: {
                  borderRadius: '0%',
                  height: '320px',
                  objectFit: 'cover',
                  width: '320px',
                },
              }}
              alt='Highlander Accounting Logo'
              className='!h-140 mt-16 !w-180 object-cover'
              src='/logos/white_logo_transparent_background.png'
              width='100%'
            />
          </div>
        </div>
      </main>
    </>
  );
}
