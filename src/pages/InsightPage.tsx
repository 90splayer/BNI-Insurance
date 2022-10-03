import { Box, Image, Heading, Text, VStack, HStack } from '@chakra-ui/react'
import React from 'react'
import InsightsPageRead from '../components/templates/insights/InsightsPageRead'
import insightimg from '../assets/insightsimg.png'
import artist from '../assets/images/insights/inews1.jpg'
import artist2 from '../assets/images/insights/inews2.jpg'

const InsightPage = () => {
  return (
    <VStack bg={'#F0F4F7'}>
      <Box >
            <Image w={''} src={insightimg}/>
            <Box zIndex={1} pos={'absolute'} top={'18em'} left={'24em'}>
            <Heading zIndex={1} pb={'0.3em'} textAlign={'center'} fontWeight={'semibold'} fontSize='xx-large' color={'white'}>Get insights in the Inurance Industry</Heading>
            <Text textAlign={'center'} color={'white'} fontSize='md'>We collect a range of insurance updates from the best and most reliable<br/>information blogs guaranteed to protect you from risk.</Text>
            </Box>
            </Box>
            <VStack px={'15em'}>
              <VStack pb={'2em'} pt={'2em'} id='news1'>
                <HStack>
                  <Image src={artist} maxH={'15em'}/>
                  <Text fontSize={'1.5em'} w={'10em'} textAlign={'center'} color='#003B79' fontWeight={'extrabold'}>NIGERIAN ENTERTAINERS SHOULD BE INSURED</Text>
                </HStack>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>With the emergence of “Wizkid” and “Burna Boy” as winners in the 63rd Grammy awards, and other recognitions gotten by the Nigerian Entertainment industry, it can be said that Nigeria produces the best music in Africa and has a fast-growing entertainment industry than other African countries. </Text>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>Globally, the entertainment market is reportedly valued at $2.6 trillion. Although this industry has the potential to generate enormous profits, there are risks associated with mishaps and legal suits.</Text>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>Businesses in the entertainment industry need to have a thorough entertainment insurance policy. High coverage limits, equipment coverage, and liability protection are all features of a good policy. The various insurance options available and the kind of coverage that is required must be understood by the entertainment industry.</Text>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>Unfortunately, most of these popular Nigerian Entertainers lack an insurance cover against common risks like death, disfigurement, and critical illnesses brought on by attacks or accidents. Many devoted fans, followers, and admirers of well-known entertainers are never aware that they lack insurance until something unexpected happens and terrible news is widely reported about efforts to raise money for the entertainers or their immediate relatives.</Text>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>In the long run, the entertainment industry will be happy if it chose to work with insurance companies, who are typically recognized for their caution and assertiveness, even though it is obvious that the insurance industry stands to benefit more from the entertainment industry at the initial stage of any collaboration. The Nigerian economy and Nigerian citizens would not have to grieve and worry about the untimely passing or poor health of their prominent artists would be the bigger winners.</Text>
              </VStack>
              <VStack pb={'2em'} id='news2'>
                <HStack>
                  <Image src={artist2} maxH={'15em'}/>
                  <Text fontSize={'1.5em'} w={'10em'} textAlign={'center'} color='#003B79' fontWeight={'extrabold'}>NHIA TASKS STATE GOVERNMENTS ON HEALTH INSURANCE SCHEME</Text>
                </HStack>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>All 36 state governors in the nation have been instructed by the National Healthcare Insurance Authority (NHIA) to create National Health Insurance Scheme (NHIS) agencies in their various states to offer insurance coverage to the populace. This is to guarantee that the recently passed National Health Insurance Scheme enrolls 83 million underprivileged Nigerians.</Text>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>To achieve universal coverage, the National Health Insurance Scheme will cover at least 83 million low-income Nigerians, according to Prof. Nasir Mohammed Sambo, Director General of NHIA, who was speaking after receiving an award at the National Awards ceremony of the Health Care Providers Association of Nigeria (HCPAN) in Lagos. He claims that in order to guarantee the provision of high-quality healthcare throughout the nation, NHIA will work with state governments' health insurance programs to accredit primary and secondary healthcare facilities and enroll Nigerians in the program.</Text>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>To improve data collecting, monitoring, and quality assurance, the new law also gives the NHIA and state governments the ability to create information management systems and digital records.</Text>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>This is a significant step toward achieving Universal Health Coverage and an improvement over the National Health Insurance Scheme Act, 2004, 1999, whose goal was to "provide health insurance which shall entitle insured persons and their dependants the benefit of prescribed good quality and cost-effective health services" (UHC).</Text>
                <Text pb={{base: '1em', md: '1em', lg:'1em'}}>The NHIS Act had a conflict of interest because a Health Maintenance Organization was a member of the NHIS council, which was rectified by the current NHIA Act. This blatantly prevented the NHIS from carrying out its ideal duty of properly regulating and overseeing HMOs, which led to accusations of abuse, financial impropriety, and fraud against the HMOs and NHIS. HMO representatives are not in any manner a part of the new act's governing council. In reality, potential council members must disclose their holdings, and membership in any HMO is a reason to revaluate their candidacy. That is one method of accountability.</Text>
              </VStack>
            </VStack>
    </VStack>
  )
}

export default InsightPage