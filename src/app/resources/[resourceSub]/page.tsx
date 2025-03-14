import { JSX } from 'react';
import { notFound } from 'next/navigation';
import Blog from './blog';
import Guides from './guides';


export default function ResourceSubPage({ params }: { params: { resourceSub: string } }) {

  if (!params.resourceSub || typeof params.resourceSub !== 'string') {
    notFound();
  }
  const mapPages: Record<string, JSX.Element> = {
    blog: <Blog />,
    guides: <Guides />,
  };
  const page = mapPages[params.resourceSub];
  if (!page) {
    notFound();
  }

  return page;
}