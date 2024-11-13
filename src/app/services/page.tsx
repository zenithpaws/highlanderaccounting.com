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
      <title>Services - Highlander Accounting</title>
      <main className='m-0 flex items-center justify-center p-0'>
        <div className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[40rem] w-full p-0`}>
          <div className='relative size-full'>
            <div className={`${styles.gridInner} absolute size-full`}></div>
          </div>
        </div>

        <div className='relative mx-4 mt-8 box-border p-0 px-1 sm:mx-8 sm:mt-12 md:mt-20 lg:w-240 xl:w-330'>
          <div className={`${styles.slideFromLeft} md:ml-8 lg:mr-12 lg:mt-16`}>
            <Title className='mt-10 font-jakarta text-[1.9rem] font-medium tracking-normal text-primary antialiased sm:text-[3rem] md:text-[4rem] xl:text-[4.5rem]'>
              What services does <span className={`${styles.name}`}>Highlander Accounting</span> provide?
            </Title>

            <div className={`${styles.slideFromLeft} md:ml-8 lg:mr-12 lg:mt-16`}>
              <Title order={2} className='mt-8 font-jakarta text-[1.5rem] font-medium tracking-normal text-primary antialiased md:text-[2.5rem] xl:text-[2.7rem]'>
                Fractional CFO Services
              </Title>

              <Text className='md:w-9/16 mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
                A fractional CFO (Chief Financial Officer) is a financial executive who provides high-level financial management and strategic advice to businesses on a part-time, contract, or
                outsourced basis. This role is ideal for companies that may not need or cannot afford a full-time CFO but still require expert financial leadership. As your fractional CFO, we can
                assist in enhancing your Risk Management process, financial strategy & planning, financial reporting, and even your payroll and accounts payable functions.
              </Text>

              <Title order={3} className='mt-8 font-jakarta text-[1.5rem] font-medium tracking-normal text-primary antialiased md:text-[2.5rem] xl:text-[2.7rem]'>
                Tax Preparation
              </Title>

              <Text className='md:w-9/16 mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
                Do you need to get your personal tax return or your business tax return prepared? What about filing your W2 for your employees, your 941s for your business, or your 1099s for your
                contractors? We can assist with it all! Our rates is based on a flat-rate, per product pricing model. That way, you know what you are paying up front instead of being surprised.
              </Text>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
