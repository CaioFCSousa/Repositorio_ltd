import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { Input, Label, Button, WindmillContext } from '@roketid/windmill-react-ui'

function CrateAccount() {
  const { mode } = useContext(WindmillContext)
  const imgSource = mode === 'dark' ? '/assets/img/create-account-office-dark.jpeg' : '/assets/img/create-account-office.jpeg'

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="relative h-32 md:h-auto md:w-1/2">
            <Image
              aria-hidden="true"
              className="object-cover w-full h-full"
              src={imgSource}
              alt="Office"
              layout='fill'
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Criar conta
              </h1>
              <Label>
                <span>Matricula</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" />
              </Label>
              <Label className="mt-4">
                <span>Senha</span>
                <Input className="mt-1" placeholder="***************" type="password" />
              </Label>
              <Label className="mt-4">
                <span>Confirma senha</span>
                <Input className="mt-1" placeholder="***************" type="password" />
              </Label>

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  Eu concordo com a <span className="underline">política de privacidade</span>
                </span>
              </Label>

              <Link
                  href='/login-user'
                  passHref={true}
                >
                <Button block className="mt-4">
                  Crear conta
                </Button>
              </Link>

              <hr className="my-8" />

            

              <p className="mt-4">
                <Link href="/login-user">
                  <a
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    já tem uma conta? Conecte-se
                  </a>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default CrateAccount
