import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui/Navbar';
import { SideMenu } from '../ui/SideMenu';

interface Props extends PropsWithChildren {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const XIXLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='author' content='Aaron Quintanal Martín' />
                <meta name='description' content={pageDescription} />
                <meta name='keywords' content={`${title}, XIX, AQM, Aaron Quintanal Martin, portafolio, portfoil`} />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={pageDescription} />

                {
                    imageFullUrl && (
                        <meta name='og:image' content={imageFullUrl} />
                    )
                }
            </Head>

            <Navbar />

            <SideMenu />

            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                {children}
            </main>

            {/* FOOTER */}

            <footer>
                {/* TODO: custom footer */}
            </footer>
        </>
    )
}
