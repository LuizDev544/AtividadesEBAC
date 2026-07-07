import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <div
      style={{
        width: 48,
        height: 48,
        border: '5px solid rgba(255, 255, 255, 0.2)',
        borderTopColor: colors.white,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }}
    />
    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
  </Container>
)

export default Loader
