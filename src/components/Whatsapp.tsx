import { FloatingWhatsApp } from 'react-floating-whatsapp'
import CustomerCare from './../assets/customer-care.png';

export default function Whatsapp() {
    return (
        <FloatingWhatsApp
            phoneNumber={'2347049688012'}
            accountName={'Quantumswap Helpline'}
            chatboxStyle={{
                color: '#000'
            }}
            allowClickAway={true}
            darkMode={true}
            statusMessage={'Online'}
            avatar={CustomerCare}
        />
    )
}
