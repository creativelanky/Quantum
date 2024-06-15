import { FloatingWhatsApp } from 'react-floating-whatsapp'
import CustomerCare from './../assets/customer-care.png';

export default function Whatsapp() {
    return (
        <FloatingWhatsApp
            phoneNumber={'2348109013969'}
            accountName={'Itseghosime'}
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
