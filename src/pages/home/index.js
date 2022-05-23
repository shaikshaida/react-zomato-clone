import React, {useState} from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/footer'

const getCorrectScreen = (tab) => {
  switch( tab ){
    case "Delivery":
      return <div>Delivery</div>
    case "Dining Out":
      return <div>Dining Out</div>
    case "Nightlife":
      return <div>Nightlife</div>
    default:
      return <div>My delivery Page</div>
  }
}
const HomrPage = () => {
  const [activeTab, setActiveTab ] = useState('Delivery')
  return (
    <div>
      <Header />
      <TabOptions />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
}

export default HomrPage
