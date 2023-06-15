import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
//components
import { GradientBackgroundCon , BackgroundImage1 ,BackgroundImage2,FooterCon,RedSpan,FooterLink ,QuoteGeneratorCon,QuoteGeneratorInnerCon,QuoteGeneratorTitle,QuoteGeneratorSubTitle,GenerateQuoteButton,GenerateQuoteButtonText} from '@/components/QuoteGenerator/QuoteGeneratorElements';

//Assets
import Clouds1 from '../assets/cloud-and-thunder.png'
import Clouds2 from '../assets/cloudy-weather.png'

export default function Home() {
    const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

    return(
        <>
        <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         {/* Background */}
         <GradientBackgroundCon>

          {/* Quote Generator Modal Pop-up */ }
          {/* <QuoteGeneratorModal
          /> */}

            {/* Quote Generator */ }
           <QuoteGeneratorCon>
               <QuoteGeneratorInnerCon>
                 <QuoteGeneratorTitle>
                    Daily Inspiration Generator
                 </QuoteGeneratorTitle>
                 <QuoteGeneratorSubTitle>
                 Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
                 </QuoteGeneratorSubTitle>
                 <GenerateQuoteButton >
              <GenerateQuoteButtonText>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
               </QuoteGeneratorInnerCon>
           </QuoteGeneratorCon>




         {/* Background images */ }
         <BackgroundImage1 
          src={Clouds1}
          height="300"
          alt="cloudybackground1"
        />

        <BackgroundImage2 
          src={Clouds2}
          height="300"
          alt="cloudybackground1"
        />

        {/* Footer */ }
        <FooterCon>
            <>
            Quotes Generated: {numberOfQuotes}
            <br/>
            Developed with <RedSpan>♥</RedSpan> by <FooterLink href="https://www.linkedin.com/in/mohamed-nabiil/" target="_blank" rel="noopener noreferrer"> @MohamedNabil </FooterLink>
            </>
        </FooterCon>
         </GradientBackgroundCon>
      
        </>
    )

}