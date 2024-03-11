import Box from '@/components/Box';
import Card from '@/components/Card';
import Wrapper from '@/components/Wrapper';
import React from 'react'

export default function Home() {
  return (
    <section className='mt-10 min-h-screen'>
      <Wrapper title='ghost' />
      <Wrapper title='anime' />
      <Wrapper title='Adult' is18={true} />
    </section>
  );
}
