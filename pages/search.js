import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY, CONTEXT_KEY} from '../Keys'
import Response from '../Response'
import {useRouter} from 'next/router'
import SearchResults from '../components/SearchResults'
import Footer from '../components/footer'

function Search({results}) {
  const router = useRouter();

  console.log(results)
  return (
    <div>
        <Head>
            <title>{router.query.term} - BB Browser</title>
            <link rel='icon' href='/black-box.gif' />
        </Head>

        <Header />

        <SearchResults results={results} />

        <Footer />

    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || '0';

  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?Key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());

  return {
    props: {
      results: data,
    }
  }
}