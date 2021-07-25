import HotspotIcon from './hotspot.svg'
import { MakerHotspot } from '../hotspotMakerTypes'
import ANTENNAS from './antennas'

const DeeperNetworkHotspotBLE = {
  name: 'DeeperNetwork Hotspot',
  icon: HotspotIcon,
  onboardType: 'BLE',
  translations: {
    en: {
      diagnostic:
        '<b><white>Diagnostic support allows Deeper Network to identify issues with your Hotspot in a secure way.</white></b>\n\nDeeper Network will never have access to private keys and will only ever be able to access your Hotspot and not any other devices on your Network.\n\nIf you would like to opt-out of diagnostic support please email <purple><b>support@deepernetwork.com</b></purple> from the email used to purchase the Hotspot.',
      power: [
        'Attach the antenna and plug in the provided power adapter.',
        'Your Hotspot will boot up, and its light will become Green when ready.',
      ],
      bluetooth: [
        'Press the black button on your Hotspot. Its light should turn blue.',
        "Ensure your phone's bluetooth is on before proceeding",
      ],
    },
    zh: {
      diagnostic:
        '<b><white>Hotspot 诊断支持帮助 Deeper Network 安全确认您的 Hotspot 问题。</white></b>\n\nDeeper Network 绝不会访问私人密钥，且仅可访问您的 Hotspot，无法访问您网络中的任何其他设备。\n\n若选择退出诊断支持，请使用购买 Hotspot 时提供的电子邮箱发送请求至<purple><b>support@deepernetwork.com</b></purple>。',
      power: [
        '连接天线并接通电源',
        '开机后，Deeper Network 将亮起 LED 电源指示灯',
      ],
      bluetooth: [
        '使用回形针轻按 LED 指示灯右侧小孔。',
        'LED 电源指示灯变成缓慢闪烁后，\n\n点击"下一步"开始扫描',
      ],
    },
  },
  antenna: {
    us: ANTENNAS.DEEPER_NETWORK_US,
    default: ANTENNAS.DEEPER_NETWORK_US,
  },
} as MakerHotspot

export default { DeeperNetworkHotspotBLE }
