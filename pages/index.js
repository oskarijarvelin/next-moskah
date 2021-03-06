import { Container, SimpleGrid, Flex, Spacer, Box, Heading, Text, Button, Link, Icon } from '@chakra-ui/react'
import { FaRegPlayCircle, FaCalendarAlt, FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaBandcamp } from 'react-icons/fa'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'

export default function Index() {
    return (
        <>
            <Head>
                <title>Moskah - Se raskaampi rockyhtye - #rokkipitääsielunpuhtaana</title>
                <meta name="description" content="Tämä mielenkiintoisena liveaktina tunnettu kvartetti kantaa rockin lippua harteillaan ylpeänä. Moskah on perustettu 2014 Oulussa." />
                <link rel="canonical" href="https://moskah.vercel.app/" />
                <meta property="og:locale" content="fi_FI" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Moskah - Se raskaampi rockyhtye - #rokkipitääsielunpuhtaana" />
                <meta property="og:description" content="Tämä mielenkiintoisena liveaktina tunnettu kvartetti kantaa rockin lippua harteillaan ylpeänä. Moskah on perustettu 2014 Oulussa." />
                <meta property="og:url" content="https://moskah.vercel.app/" />
                <meta property="og:site_name" content="Moskah" />
                <meta property="og:image" content="https://moskah.vercel.app/promo.jpg" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="400" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Moskah - Se raskaampi rockyhtye - #rokkipitääsielunpuhtaana" />
                <meta name="twitter:description" content="Tämä mielenkiintoisena liveaktina tunnettu kvartetti kantaa rockin lippua harteillaan ylpeänä. Moskah on perustettu 2014 Oulussa." />
                <meta name="twitter:image" content="https://moskah.vercel.app/promo.jpg" />
                <link rel="icon" type="image/png" sizes="512x512"  href="/favicon.png"></link>
            </Head>
            <Box bg='black' color='white' h='100%' minH='100vh' py={20} px={{base: 4, md: 16}} pos='relative' bgImage='url(/bg2022.webp)' bgSize='cover' bgAttachment='fixed'>
                <Container maxW='1312px'>

                    <Flex mb={{base: 16, sm: 24, xl: 32}} px={{base: 10, sm: 20}}>
                        <Spacer />
                            <NextLink href="/" passHref>
                                <Link title='Moskah-logo'>
                                    <Image src='/logo.webp' alt='Moskah-logo' width={600} height={206} />
                                </Link>
                            </NextLink>
                        <Spacer />
                    </Flex>

                    <Flex mb={{base: 16, sm: 40}} justifyContent='center' fontSize={{base: 24, sm: 28}}>
                        <NextLink href="https://www.facebook.com/moskahband/" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah Facebookissa'>
                                <Icon as={FaFacebook} />
                            </Link>
                        </NextLink>

                        
                        <NextLink href="https://www.instagram.com/moskahband/" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah Instagramissa'>
                                <Icon as={FaInstagram} />
                            </Link>
                        </NextLink>

                        
                        <NextLink href="https://www.youtube.com/channel/UC30ncG5cABdfMUEFHUC4r-A" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah YouTubessa'>
                                <Icon as={FaYoutube} />
                            </Link>
                        </NextLink>

                        
                        <NextLink href="https://open.spotify.com/artist/4gUwAFzkMf7cRVQzemBIHw" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah Spotifyssa'>
                                <Icon as={FaSpotify} />
                            </Link>
                        </NextLink>

                        
                        <NextLink href="https://moskah.bandcamp.com/" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah Bandcampissa'>
                                <Icon as={FaBandcamp} />
                            </Link>
                        </NextLink>
                    </Flex>

                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 10, lg: 20}} mb={{base: 16, lg: 40}}>
                        <Box>
                            <NextLink href="https://youtu.be/AuuHfYuTpn4" passHref>
                                <Link isExternal title='Aika-livetallenne YouTubessa'>
                                    <Box d='flex' boxShadow='2xl' pos='relative' bgColor='black'>
                                        <img src='https://i.ytimg.com/vi/AuuHfYuTpn4/maxresdefault.jpg' alt='Ruutukaappaus Aika-livetallenteesta' width={800} height={450} />
                                        <Icon as={FaRegPlayCircle} color='white' fontSize={{base: 48, lg: 96}} pos='absolute' top={{base: 'calc(50% - 24px)', lg: 'calc(50% - 48px)'}} left={{base: 'calc(50% - 24px)', lg: 'calc(50% - 48px)'}} />
                                    </Box>
                                </Link>
                            </NextLink>
                        </Box>
                        <Box>
                            <Heading as='h1'>#rokkipitääsielunpuhtaana</Heading>

                            <Text>Tämä mielenkiintoisena liveaktina tunnettu kvartetti kantaa rockin lippua harteillaan ylpeänä pyrkien jalostamaan tyyliään näköisekseen. 2014 perustettu Oulusta kotoisin oleva Se raskaampi rock yhtye Moskah pureutuu teoksissaan ympärillä vallitsevan elon tekstittämiseen, eikä suostu kahliutumaan yhden tyylisuunnan bändiksi, vaan antaa kappaleiden itse kirjoittaa itsensä.</Text>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 10, lg: 20}} mb={{base: 32, lg: 40}}>
                        <Box order={{base: 2, lg: 1}}>
                            <Heading>Discografia</Heading>
                            
                            <Text><b>2015</b> julkaistu <i>”Ennustus”</i> -single ja siihen kuvattu musiikkivideo, jo puretulla Martinniemen sahalla, oli ensimmäinen esiintulo musiikillisesti.</Text>

                            <Text><b>2016</b> Ensimmäisen pitkäsoittomme julkaisu. Levyltä lohkaistiin musiikivideot <i>”Polku”</i> ja <i>”Aika”</i> -kappaleista. Tämä albumi aukaisi ovet keikoille mm. Snookertime, Oulu, joka oli yhtyeen ensimmäinen keikka.</Text>

                            <Text><b>2017</b> <NextLink href="https://open.spotify.com/album/2OJB4pawmaYSj5B8XRxgI1" passHref><Link isExternal><i>”Etsijä”</i></Link></NextLink> -single julkaistiin ja oli yhtyeen viimeinen täysin itse äänityksistä julkaisuun tehty tuotos.</Text>

                            <Text><b>2018</b> <NextLink href="https://open.spotify.com/album/0mSJrRk4IknbuHA6S3dXkP" passHref><Link isExternal><i>”Yhden Illan Galleria”</i></Link></NextLink> -EP äänitettiin Surfsound Finlandilla Oulussa, Janne Huotarin toimiessa äänittäjänä. <i>Pasi Hieta</i> toimi YIG:n tuottajana ja miksaajana. YIG:n masteroi <i>Hannu Marjakangas</i>. EP:ltä lohkaistiin musiikkivideo <NextLink href="https://www.youtube.com/watch?v=U43GUMW5VpY" passHref><Link isExternal><i>”Kulkijat”</i></Link></NextLink> -kappaleesta, joka kuvattiin Oulun yliopiston eläinmuseossa.</Text>

                            <Text><b>2020</b> ilmestyi <NextLink href="https://open.spotify.com/album/1pisATBoO2OWCCf2wcmrTt" passHref><Link isExternal><i>”Selviytyjän Syndrooma”</i></Link></NextLink> -albumi. Albumi äänitettiin yhteistyössä <NextLink href="http://snowroadstudios.com/" passHref><Link isExternal><i>Snowroads Studiosin</i></Link></NextLink> kanssa. Albumin miksasi ja masteroi <i>JP Pulkkinen</i>. Levyltä lohkaistiin musiikivideot <NextLink href="https://www.youtube.com/watch?v=8QAZ3AeH8K8" passHref><Link isExternal><i>”Nouse Raunioista”</i></Link></NextLink>– ja <NextLink href="https://www.youtube.com/watch?v=y2q8qemI36E" passHref><Link isExternal><i>”Iijoki”</i></Link></NextLink> -kappaleista.</Text>

                            <Text><b>2021</b> <NextLink href="https://open.spotify.com/album/1BDTUsER7uT9nxVvWwelI1" passHref><Link isExternal><i>”Fata Morgana”</i></Link></NextLink> -EP näki päivänvalon. Levy äänitettiin <i>Space Studiosilla</i> Oulussa. EP:n miksasi sekä masteroi <i>Janne Huotari</i>. Levyn <NextLink href="https://www.youtube.com/watch?v=da4qaT6fQmY" passHref><Link isExternal><i>”Mustakirja”</i></Link></NextLink> -kappaleesta tehtiin musiikkivideo, jonka käsikirjoittivat <i>Eerik Mehtälä</i> sekä <i>Oskari Järvelin</i>. <i>Antti Lauronen</i> sai olla yhtyeen ensimmäinen musiikkivideossa toiminut ammattinäyttelijä.</Text>

                            <Text>Kaaoszinen demonurkka Mustastakirjasta; <i>”Tämän viikon demonurkan voiton vie Moskah, joka lunastaa mahdollisuuden päästä esiintymään Nummirockiin. Onnittelut ukoille, jatkakaa samaan malliin!”</i><br /><NextLink href="https://kaaoszine.fi/demonurkka-vol-185-vk-50-2021-johanna-oikolukee-loppuun/" passHref><Link isExternal>Demonurkka vol. 185</Link></NextLink> (vk 50/2021).</Text>
                        </Box>
                        <Box order={{base: 1, lg: 2}}>
                            <Box d='flex' boxShadow='2xl' bgColor='black'>
                                <Image src='/promo2022.webp' alt='Moskah promokuva' width={800} height={450} />
                            </Box>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 10, lg: 20}} mb={{base: 40, lg: 60}}>
                        <Box>
                            <Box d='flex' boxShadow='2xl' bgColor='black'>
                                <Image src='/keikka2022.webp' alt='Moskah keikalla' width={800} height={533} />
                            </Box>
                        </Box>
                        <Box>
                            <Heading>Keikkamyynti</Heading>

                            <Text>
                                Paavo Ihme<br />
                                <NextLink href="tel:+358404154482" passHref>
                                    <Link>
                                        040 415 4482
                                    </Link>
                                </NextLink>
                                <br />
                                <NextLink href="mailto:moskahband@gmail.com" passHref>
                                    <Link>
                                        moskahband@gmail.com
                                    </Link>
                                </NextLink>
                            </Text>

                            <NextLink href="https://www.songkick.com/artists/10062200-moskah/calendar" passHref>
                                <Button as='a' leftIcon={<FaCalendarAlt />} colorScheme='blue' variant='solid' fontSize={{base: 20, md: 24}} p={{base: 6, md: 8}} iconSpacing={4} boxShadow='2xl' target='_blank'>
                                    Keikkakalenteri
                                </Button>
                            </NextLink>
                        </Box>
                    </SimpleGrid>

                    <Container maxW={600} textAlign='center' mb={{base: 40, lg: 60}} px={0}>
                        <Heading fontSize={{base: 30, md: 56}} mb={{base: 8, md: 16}}>Imperiumin levyarvostelu Selviytyjän Syndroomasta</Heading>
                        <Text fontSize={{base: 18, sm: 20, md: 24}}>
                            <i>”Selviytyjän syndrooma on erittäin hyvin tehty levyllinen raskasta rockia, ja jos synkkyyteen taipuvainen raskaampi suomirock maistuu, on Moskah ilman muuta vilkaisun arvoinen yhtye.”
                            </i>
                        </Text>
                        <Text>
                            <b>Ville Toivanen</b>
                        </Text>
                    </Container>

                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 10, lg: 20}} mb={{base: 20, lg: 40}}>
                        <Box>
                            <Heading>Kokoonpano</Heading>
                            
                            <Text>
                                <b>Paavo Ihme</b> – basso/laulu<br />
                                <b>Markus Olkoniemi</b> – kitara<br />
                                <b>Eerik Mehtälä</b> – kitara/laulu<br />
                                <b>Riku Kovalainen</b> – rummut
                            </Text>
                        </Box>
                        <Box>
                            <Heading>Yhteistyökumppanit</Heading>

                            <Text>
                                <NextLink href="https://oskarijarvelin.fi" passHref>
                                    <Link isExternal>
                                        Oskari Järvelin
                                    </Link>
                                </NextLink>
                                <br />
                                Tommi Tenhunen<br />
                                <NextLink href="http://snowroadstudios.com/" passHref>
                                    <Link isExternal>
                                        JP Pulkkinen
                                    </Link>
                                </NextLink>
                            </Text>
                        </Box>
                    </SimpleGrid>

                    <Flex mb={{base: 16, sm: 24, xl: 40}} justifyContent='center' fontSize={{base: 24, sm: 28}}>
                        <NextLink href="https://www.facebook.com/moskahband/" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah Facebookissa'>
                                <Icon as={FaFacebook} />
                            </Link>
                        </NextLink>

                        
                        <NextLink href="https://www.instagram.com/moskahband/" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah Instagramissa'>
                                <Icon as={FaInstagram} />
                            </Link>
                        </NextLink>

                        
                        <NextLink href="https://www.youtube.com/channel/UC30ncG5cABdfMUEFHUC4r-A" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah YouTubessa'>
                                <Icon as={FaYoutube} />
                            </Link>
                        </NextLink>

                        
                        <NextLink href="https://open.spotify.com/artist/4gUwAFzkMf7cRVQzemBIHw" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah Spotifyssa'>
                                <Icon as={FaSpotify} />
                            </Link>
                        </NextLink>

                        
                        <NextLink href="https://moskah.bandcamp.com/" passHref>
                            <Link isExternal color='white' mx={{base: 2, sm: 4}} title='Moskah Bandcampissa'>
                                <Icon as={FaBandcamp} />
                            </Link>
                        </NextLink>
                    </Flex>

                    <Flex px={{base: 10, sm: 20}} mb={20}>
                        <Spacer />
                            <Image src='/vakkara.webp' alt='Moskah-symboli' width={200} height={200} />
                        <Spacer />
                    </Flex>
                    
                </Container>
            </Box>
        </>
    )
}