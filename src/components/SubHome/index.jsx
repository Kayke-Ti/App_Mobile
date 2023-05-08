import  Logo  from "../../assets/Jovens-estudando.png"
import { 
    Circle, 
    ContainerImg,
    HeaderGreen,
    HeaderYellow, 
    Img, 
    Infor, 
    SpanText, 
    SubCircle, 
    Text, 
    Icon, 
    CircleGreen, 
    TextInfor
  } from "./styled"

import { FiArrowRight } from 'react-icons/fi'


const SubHome = () => {
  return (
    <div>
       <HeaderGreen>
      <h1>⠀</h1>
    </HeaderGreen>

    <HeaderYellow>
      <h1>⠀</h1>
    </HeaderYellow>
      <ContainerImg>
        <Img src={Logo} />
      </ContainerImg>
      <Infor>
      <Text>seja bem vindo(a) <br /> 
        SIBI - <SpanText>GERARDO JOSÉ</SpanText>
        </Text>
        <a href="#">
        <Circle>
          <SubCircle>
            <Icon 
              as={FiArrowRight} 
              color="#000"
              size={50}
              />
          </SubCircle>
          <CircleGreen />
        </Circle>
        </a>
      </Infor>
      <TextInfor>
         Deslize para a direita para começar
      </TextInfor>
    </div>
  )
} 

export default SubHome