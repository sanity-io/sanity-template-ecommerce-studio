import {defineType} from 'sanity'
import ProxyStringInput from '../../components/inputs/ProxyString'

export const proxyString = defineType({
  name: 'proxyString',
  title: 'Title',
  type: 'string',
  components: {
    input: ProxyStringInput,
  },
})
