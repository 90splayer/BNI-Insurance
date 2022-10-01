import { Box, Heading, HStack, Image, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import BoardCard from '../components/templates/BoardCard'
import oma from '../assets/images/board/oma.png'
import sam from '../assets/images/board/samojogbo.png'
import bade from '../assets/images/board/bade.png'
import feso from '../assets/images/board/feso.jpeg'
import yunusa from '../assets/images/board/Yunusa.jpeg'
import BoardMemberCard from '../components/templates/about/BoardMemberCard'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import board from '../assets/images/pages/boardimg.png'

const BoardPage = () => {

    const [hidden, isHidden] = useState(true)
    const [hidden2, isHidden2] = useState(true)
    const [hidden3, isHidden3] = useState(true)
    const [hidden4, isHidden4] = useState(true)
    const [hidden5, isHidden5] = useState(true)
    const [overlayOpen1, isOverlayOpen1] = useState(false)
    const [overlayOpen2, isOverlayOpen2] = useState(false)
    const [overlayOpen3, isOverlayOpen3] = useState(false)
    const [overlayOpen4, isOverlayOpen4] = useState(false)
    const [overlayOpen5, isOverlayOpen5] = useState(false)
  return (
      <Box>
          <ProductPageCard 
    heading={'Our Leadership'}
    img={board}
    details="Deeply rooted in our employees are our values, we are creating long lasting values for our stakeholders"
    />
    <VStack bg={'#F0F4F7'} spacing={'4em'} pb={'6em'} pt={'3em'}>  <Heading>Board of Directors</Heading>
    <HStack spacing={'4em'}>
    <Box pos="relative"
      transition="0.5s ease"
      _hover={{ cursor: 'pointer'}} onMouseEnter={() => isHidden3(false)}
      onMouseLeave={() => isHidden3(true)} onClick={() => isOverlayOpen3(true)}>
          <Image src={yunusa} alt='boardimg' w={'15em'} h={'15em'}/>
          <VStack justifyContent={'center'}  id='overlay' display={hidden3?'none':'flex'} pos="absolute"
        top="2em"
        right="2em" zIndex={9} bg='rgba(52, 52, 52, 0.8)' w={'11em'} h={'11em'}>
            <Text color={'white'} fontWeight={'normal'} 
            w={'8em'} textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Chairman</Text>
            <Text color={'white'} fontWeight={'bold'} 
            w={'8em'} textAlign={'center'} fontSize='medium'
            >YUNUSA SALE MUHAMMAD</Text>
        </VStack>
        
    </Box>
    <Box pos="relative"
      transition="0.5s ease"
      _hover={{ cursor: 'pointer'}} onMouseEnter={() => isHidden2(false)}
      onMouseLeave={() => isHidden2(true)} onClick={() => isOverlayOpen2(true)}>
          <Image src={oma} alt='boardimg' w={'15em'} h={'15em'}/>
          <VStack justifyContent={'center'}  id='overlay' display={hidden2?'none':'flex'} pos="absolute"
        top="2em"
        right="2em" zIndex={9} bg='rgba(52, 52, 52, 0.8)' w={'11em'} h={'11em'}>
            <Text color={'white'} fontWeight={'normal'} 
            w={'8em'} textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Executive Vice Chair Person</Text>
            <Text color={'white'} fontWeight={'bold'} 
            w={'8em'} textAlign={'center'} fontSize='medium'
            >IFEOMA ADEOYE</Text>
        </VStack>
        
    </Box>
    <Box pos="relative"
      transition="0.5s ease"
      _hover={{ cursor: 'pointer'}} onMouseEnter={() => isHidden5(false)}
      onMouseLeave={() => isHidden5(true)} onClick={() => isOverlayOpen5(true)}>
          <Image src={sam} alt='boardimg' w={'15em'} h={'15em'}/>
          <VStack justifyContent={'center'}  id='overlay' display={hidden5?'none':'flex'} pos="absolute"
        top="2em"
        right="2em" zIndex={9} bg='rgba(52, 52, 52, 0.8)' w={'11em'} h={'11em'}>
            <Text color={'white'} fontWeight={'normal'} 
            w={'8em'} textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Non Executive Director</Text>
            <Text color={'white'} fontWeight={'bold'} 
            w={'8em'} textAlign={'center'} fontSize='medium'
            >SAMUEL OJOGBO</Text>
        </VStack>
        
    </Box>
            
    </HStack>

    <HStack spacing={'4em'}>
    <Box pos="relative"
      transition="0.5s ease"
      _hover={{ cursor: 'pointer'}} onMouseEnter={() => isHidden(false)}
      onMouseLeave={() => isHidden(true)} onClick={() => isOverlayOpen1(true)}>
          <Image src={bade} alt='boardimg' w={'15em'} h={'15em'}/>
          <VStack justifyContent={'center'}  id='overlay' display={hidden?'none':'flex'} pos="absolute"
        top="2em"
        right="2em" zIndex={9} bg='rgba(52, 52, 52, 0.8)' w={'11em'} h={'11em'}>
            <Text color={'white'} fontWeight={'normal'} 
            w={'8em'} textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Non Executive Director</Text>
            <Text color={'white'} fontWeight={'bold'} 
            w={'8em'} textAlign={'center'} fontSize='medium'
            >BADE ADESHINA</Text>
        </VStack>
        
    </Box>
    <Box pos="relative"
      transition="0.5s ease"
      _hover={{ cursor: 'pointer'}} onMouseEnter={() => isHidden4(false)}
      onMouseLeave={() => isHidden4(true)} onClick={() => isOverlayOpen4(true)}>
          <Image src={feso} alt='boardimg' w={'15em'} h={'15em'}/>
          <VStack justifyContent={'center'}  id='overlay' display={hidden4?'none':'flex'} pos="absolute"
        top="2em"
        right="2em" zIndex={9} bg='rgba(52, 52, 52, 0.8)' w={'11em'} h={'11em'}>
            <Text color={'white'} fontWeight={'normal'} 
            w={'8em'} textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Managing Director</Text>
            <Text color={'white'} fontWeight={'bold'} 
            w={'8em'} textAlign={'center'} fontSize='medium'
            >ABIODUN OYEFESO</Text>
        </VStack>
        
    </Box>
    </HStack>
    <Box display={overlayOpen1?'flex':'none'} pos={'absolute'} bg='rgba(52, 52, 52, 0.99)' zIndex={9} h={'vh'} onClick={() => isOverlayOpen1(false)}>
      <HStack>
      <Image src={bade} alt='boardimg' w={'40em'} h={'40em'}/>
        <VStack spacing={'2em'}>
        <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Non Executive Director</Text>
            <Text color={'white'} fontWeight={'bold'} 
            textAlign={'center'} fontSize='medium'
            >BADE ADESHINA</Text>
            <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small' w={'70%'}>Bade Adeshina is an alumnus of Lagos Business School, Harvard Business School, Stanford University's Graduate School of Business, Kellogg's Graduate School of Management, and Wharton's Graduate School of Business.
             Bade Adeshina is a member of the Chartered Institute of Bankers of Nigeria (CIBN), the Institute of Directors (IoD) Nigeria, the Nigerian Institute of Management (NIM), the Certified Pension Institute of Nigeria (CPIN), the Association of Investment Advisers & Portfolio Managers (IAPM), and the Associate Chartered Institute of Stock Brokers, among others. He recently sat as a Chairman of the Board of Health Assur Limited (HMO), Director on the Boards of Crownhead Capital Limited, Goldfield Group, and Premium Pension Limited (2017–2020), as well as Apricot Investments Limited and CDL Capital Market Limited. 
             Prior to that, he worked as a Special Adviser/Head, Ministry of Economic Planning, Budget & Development in Osun state. He was a member of the Technical committee with IFC/World Bank on Financing Transaction/Acquisition of several PFA's by Premium Pension Limited.
             </Text>
        </VStack>
     </HStack>
    </Box>
    <Box display={overlayOpen2?'flex':'none'} pos={'absolute'} bg='rgba(52, 52, 52, 0.99)' zIndex={9} h={'vh'} onClick={() => isOverlayOpen2(false)}>
      <HStack>
      <Image src={oma} alt='boardimg' w={'40em'} h={'40em'}/>
        <VStack spacing={'2em'}>
        <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Executive Vice Chair Person </Text>
            <Text color={'white'} fontWeight={'bold'} 
            textAlign={'center'} fontSize='medium'
            >IFEOMA ADEOYE</Text>
            <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small' w={'70%'}>Ifeoma Adeoye is the Managing Director of Business Nest Investments Limited. She is also the founder and chair person of The Progressive Advancement Centre for Entrepreneurship (PACE), a microfinance institute founded to empower the economically active poor women in Nigeria.

             She graduated with a First Class Honours degree, in Economics, from the University of Manchester and she holds a Master’s degree in Economics from the University of Warwick.
             
             She has over 10 years of experience with starting, building and managing businesses to profitability. Having worked with KPMG, The Royal Bank of Scotland, FBNQuest Merchant Bank, Nigerian Aviation Handling Company and GMT Energy Resources, she has acquired broad work experience within the Oil & Gas industry, financial services industry, aviation, consumer markets and public sector. She has extensive experience in advisory services covering financial advisory, business improvement, corporate strategy articulation, organizational diagnostics & transformation, market study and industry analysis. She has been involved in multiple corporate strategy execution projects, feasibility studies, business plan development, and organization transformation projects with notable track record in strategy articulation, project management, financial analysis, financial modeling and relationship management. 
             
             She is an astute finance professional and an aggressive, yet ethical, fund manager, who is committed to the financial empowerment of her clients.
              </Text>
        </VStack>
     </HStack>
    </Box>
    <Box display={overlayOpen5?'flex':'none'} pos={'absolute'} bg='rgba(52, 52, 52, 0.99)' zIndex={9} h={'vh'} onClick={() => isOverlayOpen5(false)}>
      <HStack>
      <Image src={sam} alt='boardimg' w={'40em'} h={'40em'}/>
        <VStack spacing={'2em'}>
        <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Non Executive Director</Text>
            <Text color={'white'} fontWeight={'bold'} 
            textAlign={'center'} fontSize='medium'
            >SAMUEL OJOGBO</Text>
            <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small' w={'70%'}>Samuel Enwerim Ojogbo has a Bachelor of Law from the Lagos State University (LASU) after which he attended Nigeria Law School and was called to the Bar in 2005. For his postgraduate education, he attended two world-class institutions where he bagged an LL.M from the University of Western Ontario in Canada and a Doctor of Philosophy degree from the University of Nottingham in England where he won an award for research excellence.

             Samuel Enwerim Ojogbo is an expert in Corporate Governance and Compliance, an aspect of professionalism he developed from his experiences at the University of Western Ontario. 
             He has also practiced and developed expertise over the years in Mergers and acquisitions, Banking, Capital Market, Public-Private Partnerships, and the Law of Trust and Trustees. He taught Corporate Law, Securities Law, and the Law of Trust at the University for about ten years.
             </Text>
        </VStack>
     </HStack>
    </Box>
    <Box display={overlayOpen3?'flex':'none'} pos={'absolute'} bg='rgba(52, 52, 52, 0.99)' zIndex={9} h={'vh'} onClick={() => isOverlayOpen3(false)}>
      <HStack>
      <Image src={yunusa} alt='boardimg' w={'40em'} h={'40em'}/>
        <VStack spacing={'2em'}>
        <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Board Member</Text>
            <Text color={'white'} fontWeight={'bold'} 
            textAlign={'center'} fontSize='medium'
            >YUNUSA SALE MUHAMMAD</Text>
            <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small' w={'70%'}>Yunusa Sale Muhammad is a multi-facet professional with over 30 years of trailblazing resourceful experience in the Architecture/Project Management, Urban Development, and Financial Service sectors. He holds both B.Sc. and M.Sc. degrees from Ahamdu Bello University Zaria. He has certifications in Capacity Building in Credit Analysis and Development Finance, Malaysia and Thailand; Real Estate Executive Programme and Capital Market, Harvard Business School, USA; Challenges of Leadership Programme, Harvard University, USA; Certificate in Quality Management and Business Performance UAE; Mindful Management: The Neuroscience of Leadership, Schulich School of Business York University Toronto Canada; Strategic Management, Schulich School of Business, and York University Toronto Canada.
             He is a fellow of the Nigerian Institute of Architects, Institute of Construction Industry Arbitrators, and a member of the Nigerian Institute of Architects (NIA), Chartered Project Management Institute of Nigeria (CPMIN), and Nigerian Institute of Directors (IoD). 
             Yunusa Sale Muhammad was the AGM to MD/CEO of Urban Development Bank of Nigeria Plc. CBD Abuja-FCT was a General Manager/Chief Executive at Bauchi State Housing Authority and Architect 1 to the Deputy Director Architect, and Head of the Building team. He is presently a Principal Partner at Globarch Associates  Abuja, Nigeria.
             </Text>
        </VStack>
     </HStack>
    </Box>

<Box display={overlayOpen4?'flex':'none'} pos={'absolute'} bg='rgba(52, 52, 52, 0.99)' zIndex={9} h={'vh'} onClick={() => isOverlayOpen4(false)}>
      <HStack>
      <Image src={feso} alt='boardimg' w={'40em'} h={'40em'}/>
        <VStack spacing={'2em'}>
        <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small'
            >Managing Director</Text>
            <Text color={'white'} fontWeight={'bold'} 
            textAlign={'center'} fontSize='medium'
            >ABIODUN OYEFESO</Text>
            <Text color={'white'} fontWeight={'normal'} 
             textAlign={'center'} justifyContent={'center'} fontSize='small' w={'70%'}>Abiodun Oyefeso is a graduate of Ambrose Alli University, Ekpoma, and holds an MBA (Human Resources Management) from Lagos State University. He is an Associate member of the Chartered Insurance Institute of Nigeria, and has over two decades of experience in the Insurance sector in Nigeria. He is an illustrious professional who has worked in supervisory and managerial capacities in several insurance firms. Having being in attendance to various seminars and trainings on Insurance, and Security has enhanced his understanding and experience in practice.
             He was the Group Head of Life (Technical) at Standard Alliance Insurance Plc.; Life Manager at Unitrust Insurance Co. Ltd; Life & Pensions Manager at Refuge Insurance Co. Ltd; Assistant Manager at Femi Johnson & Co., and with African Alliance Insurance Co. Ltd.
             With numerous accolades and proven track records to his credit, Abiodun Oyefeso brings to bear cognate and wide spectrum of tested experience and exposure.
             </Text>
        </VStack>
     </HStack>
    </Box>
    </VStack>
    </Box>
  )
}

export default BoardPage