import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

export default function Contacts({navigation}) {
    return(
        <View style={{marginTop:60}}>
            <View>
                <Text>Nome: João</Text>
                <Text>Telefone: (11) 98963-5489</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                {
                    nome:'João Augusto',
                    telefone:'(11) 98963-5489',
                    endereco: 'Rua das araucarias',
                    numero: '1759',
                    profissao: 'Carpinteiro',
                    email:'joao@carpintaria.com.br'
                })}
                >Information...</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text>Nome: Amanda</Text>
                <Text>Telefone: (19) 96587-5222</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                {
                    nome:'Amanda Silva',
                    telefone:'(19) 96587-5222',
                    endereco: 'Av. Senna Nogueira',
                    numero: '3958',
                    profissao: 'Desenvolvedora de Softwares',
                    email:'amandasilvadeveloper@gmail.com'
                })}
                >Information...</Text>
            </View>
        </View>
    )
}