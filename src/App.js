import React from 'react'
import { Layout, Card, Icon } from 'antd'
import './Assets/App.css'
import Settings from './Views/Settings'
import Pairs from './Views/Pairs'
import Question from './Views/Question'
import Round from './Views/Round'
import Feedback from './Views/Feedback'
import Sound from './Views/Sound'
import {
  appStyle,
  mainStyle,
  innerStyle,
  pageStyle,
  topLinesStyle,
  btmLinesStyle
} from './styles'
import PageHeader from './Components/PageHeader'
import { useSessionValue } from './SessionContext'
import { Lines } from './Assets'

const { Content } = Layout

const App = () => {
  const { active } = useSessionValue()
  const screens = {
    Settings: <Settings />,
    Sound: <Sound />,
    Pairs: <Pairs />,
    Question: <Question />,
    Round: <Round />,
    Feedback: <Feedback />
  }

  return (
    <Layout style={pageStyle}>
      <Icon style={topLinesStyle} component={() => <Lines />} />
      <Icon style={btmLinesStyle} component={() => <Lines />} />
      <Content style={appStyle}>
        <PageHeader />
        <Card style={mainStyle} bodyStyle={innerStyle}>
          {screens[ active ]}
        </Card>
      </Content>
    </Layout>
  )
}

export default App
