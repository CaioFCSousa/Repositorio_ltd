import React from 'react'
import { useRouter } from 'next/router';
import { Input, HelperText, Label, Select, Textarea,Button} from '@roketid/windmill-react-ui'
import Modalpages from "example/components/Modalpages"
import CTA from 'example/components/CTA'
import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'

import Layout from 'example/containers/Layout'
import { MailIcon } from 'icons'
import ProtectedRoute from "pages/auth/ProtectedRoute"
function Forms() {


  return (


  <ProtectedRoute>
 
    <Layout>
      <PageTitle>Dashboard</PageTitle>

        
    </Layout>
 </ProtectedRoute>
  )
}


export default Forms
