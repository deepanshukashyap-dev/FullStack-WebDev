import './App.css'
import Card from './components/Card'
import myimage from './assets/image.png'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-3'>Hello talwind</h1>
      <Card username='deepanshu' image='https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg' />
      <Card username='kittu' image={myimage}/>
    </>
  )
}
export default App
