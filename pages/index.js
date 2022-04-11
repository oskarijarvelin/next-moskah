import { Container, SimpleGrid, Flex, Spacer, Box, Heading, Text, Button, Link } from '@chakra-ui/react'
import { FaCalendarAlt } from 'react-icons/fa'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'

export default function Index() {
    return (
        <>
            <Head>
                <title>Moskah - Se raskaampi rockyhtye</title>
                <link rel="icon" type="image/png" sizes="512x512"  href="/favicon.png"></link>
            </Head>
            <Box bg='black' color='white' minH='100vh' py={20} position='relative' bgImage='url(/bg.jpg)' bgSize='cover' bgAttachment='fixed'>
                <Container maxW='1280px'>

                    <Flex mb={40} px={{base: 10, sm: 20}}>
                        <Spacer />
                            <Image src='/logo.png' width={600} height={206} />
                        <Spacer />
                    </Flex>

                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 10, lg: 20}} mb={{base: 20, lg: 40}}>
                        <Box>
                            <Image src='/mustakirja.png' width={600} height={338} />
                        </Box>
                        <Box>
                            <Heading as='h1'>#rokkipitääsielunpuhtaana</Heading>

                            <Text>Tämä mielenkiintoisena liveaktina tunnettu kvartetti kantaa rockin lippua harteillaan ylpeänä pyrkien jalostamaan tyyliään näköisekseen. 2014 perustettu Oulusta kotoisin oleva Se raskaampi rock yhtye Moskah pureutuu teoksissaan ympärillä vallitsevan elon tekstittämiseen, eikä suostu kahliutumaan yhden tyylisuunnan bändiksi, vaan antaa kappaleiden itse kirjoittaa itsensä.</Text>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 10, lg: 20}} mb={{base: 20, lg: 40}}>
                        <Box order={{base: 2, lg: 1}}>
                            <Heading>Discografia</Heading>
                            
                            <Text><Text as='span' color='blue' fontWeight='700' textShadow='1px 1px 6px #0E1211'>2015</Text> julkaistu <i>Ennustus</i> -single ja siihen kuvattu musiikkivideo, jo puretulla Martinniemen sahalla, oli ensimmäinen esiintulo musiikillisesti.</Text>

                            <Text><Text as='span' color='blue' fontWeight='700' textShadow='1px 1px 6px #0E1211'>2016</Text> Ensimmäisen pitkäsoittomme julkaisu. Levyltä lohkaistiin musiikivideot <i>”Polku”</i> ja <i>”Aika”</i> -kappaleista. Tämä albumi aukaisi ovet keikoille mm. Snookertime, Oulu, joka oli yhtyeen ensimmäinen keikka.</Text>

                            <Text><Text as='span' color='blue' fontWeight='700' textShadow='1px 1px 6px #0E1211'>2017</Text> <i>Etsijä</i> -single julkaistiin ja oli yhtyeen viimeinen täysin itse äänityksistä julkaisuun tehty tuotos.</Text>

                            <Text><Text as='span' color='blue' fontWeight='700' textShadow='1px 1px 6px #0E1211'>2018</Text> <i>Yhden Illan Galleria</i> -EP äänitettiin Surfsound Finlandilla Oulussa, Janne Huotarin toimiessa äänittäjänä. Pasi Hieta toimi YIG:n tuottajana ja miksaajana. YIG:n masteroi Hannu Marjakangas. EP:ltä lohkaistiin musiikkivideo <i>”Kulkijat”</i> -kappaleesta, joka kuvattiin Oulun yliopiston eläinmuseossa.</Text>

                            <Text><Text as='span' color='blue' fontWeight='700' textShadow='1px 1px 6px #0E1211'>2020</Text> ilmestyi <i>Selviytyjän Syndrooma</i> -albumi. Albumi äänitettiin yhteistyössä <i>Snowroads Studiosin</i> kanssa. Albumin miksasi ja masteroi JP Pulkkinen. Levyltä lohkaistiin musiikivideot <i>”Nouse Raunioista”</i>– ja <i>”Iijoki”</i> -kappaleista.</Text>

                            <Text><Text as='span' color='blue' fontWeight='700' textShadow='1px 1px 6px #0E1211'>2021</Text> Fata Morgana -EP näki päivänvalon. Levy äänitettiin Space Studiosilla Oulussa. EP:n miksasi sekä masteroi Janne Huotari. Levyn <i>”Mustakirja”</i> -kappaleesta tehtiin musiikkivideo, jonka käsikirjoittivat Eerik Mehtälä sekä Oskari Järvelin. Antti Lauronen sai olla yhtyeen ensimmäinen musiikkivideossa toiminut ammattinäyttelijä.</Text>

                            <Text>Kaaoszinen demonurkka Mustastakirjasta; <i>”Tämän viikon demonurkan voiton vie Moskah, joka lunastaa mahdollisuuden päästä esiintymään Nummirockiin. Onnittelut ukoille, jatkakaa samaan malliin!”</i> Demonurkka vol. 185 (vk 50/2021).</Text>
                        </Box>
                        <Box order={{base: 1, lg: 2}}>
                            <Box display='flex' boxShadow='dark-lg'>
                                <Image src='/promo.jpg' width={600} height={400} />
                            </Box>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 10, lg: 20}} mb={{base: 20, lg: 40}}>
                        <Box>
                            <Box display='flex' boxShadow='dark-lg'>
                                <Image src='/keikka.jpg' width={600} height={450} />
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

                            <Button leftIcon={<FaCalendarAlt />} colorScheme='blue' variant='solid' iconSpacing={4} boxShadow='2xl'>
                                Keikkakalenteri
                            </Button>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={20} fontSize={22} mb={{base: 20, lg: 40}}>
                        <Box>
                            <Heading>Kokoonopano</Heading>
                            
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
                                Janne Huotari<br />
                                Matias Kokkoniemi<br />
                                <NextLink href="https://www.samusaukko.com/" passHref>
                                    <Link isExternal>
                                        Samu Saukko
                                    </Link>
                                </NextLink>
                                <br />
                                <NextLink href="http://snowroadstudios.com/" passHref>
                                    <Link isExternal>
                                        JP Pulkkinen
                                    </Link>
                                </NextLink>
                            </Text>
                        </Box>
                    </SimpleGrid>

                    <Flex px={{base: 10, sm: 20}} mb={20}>
                        <Spacer />
                            <Image src='/vakkara.png' width={200} height={200} />
                        <Spacer />
                    </Flex>
                    
                </Container>
            </Box>
        </>
    )
}