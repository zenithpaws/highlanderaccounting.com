'use client';

import { Text, Title } from '@mantine/core';

import { Header } from '@/components/layout/Header';
import styles from './page.module.css';

/**
 * @description - The home page (/).
 * @return {JSX.Element} - The home page.
 */
export default function Home() {
  return (
    <>
      <Header />
      <title>About - Highlander Accounting</title>
      <main className='m-0 flex items-center justify-center p-0'>
        <div className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[40rem] w-full p-0`}>
          <div className='relative size-full'>
            <div className={`${styles.gridInner} absolute size-full`}></div>
          </div>
        </div>

        <div className='relative mx-4 mt-8 box-border p-0 px-1 sm:mx-8 sm:mt-12 md:mt-20 lg:w-240 xl:w-330'>
          <div className={`${styles.slideFromLeft} md:ml-8 lg:mr-12 lg:mt-16`}>
            <Title className='mt-10 font-jakarta text-[1.9rem] font-medium tracking-normal text-primary antialiased sm:text-[3rem] md:text-[4rem] xl:text-[4.5rem]'>
              About <span className={`${styles.name}`}>Highlander Accounting</span>
            </Title>

            <Text className='md:w-9/16 mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
              <span className={`${styles.bolded}`}>Highlander Accounting</span> is a multiservice accounting firm specializing in Tax Exempt (Non-Profit) entities, individuals, and small businesses.
              As a completely virtual firm, we adapt to meet your needs. <span className={`${styles.bolded}`}>Highlander Accounting</span> can assist you in your accounting and tax preparation needs
              as well as operate as your company or organization CFO or Controller. From startup to established, we got your back.
            </Text>

            <div className={`${styles.slideFromLeft} md:ml-8 lg:mr-12 lg:mt-16`}>
              <Title order={2} className='mt-8 font-jakarta text-[1.5rem] font-medium tracking-normal text-primary antialiased md:text-[2.5rem] xl:text-[2.7rem]'>
                About <span className={`${styles.bolded}`}>Joshua</span>
              </Title>

              <Text className='md:w-9/16 mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
                <span className={`${styles.bolded}`}>Joshua</span> has work experience as a small business owner, a regulator for the insurance industry and depository financial institutions, an
                auditor at a Top 100 Public Accounting firm focusing on financial institutions, at a small accounting firm doing tax work and auditing tax-exempt organizations, and working for
                impact-driven financial institution and nonprofit.
                <br />
                <br />
                <span className={`${styles.bolded}`}>Joshua</span> graduated from <span className={`${styles.bolded}`}>Radford University</span> in May 2015 with a Bachelor of Science in Economics and
                graduated from Southern New Hampshire University with a Master of Science in Accounting in April 2017.
              </Text>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
