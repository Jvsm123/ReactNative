//Imports

	import React, { Component } from 'react'; //import do Módulo central;
	import { Text, View } from 'react-native'; //import dos items que vamos usar no nosso programa(no caso View e text);

//Main

    // oq estiver na função normal, podemos fazer aqui na classe.
    export default class CompA extends Component
    {
        render()
        {
            return(
                <View>
                    <Text>
                        Aqui nesse caso temos uma função que se mostra um texto
                    </Text>
                </View>
            );
        };
    };

    /*
        export default function Teste() //Função normal do de JS, fazendo export de default que vem o React
        {
            return(
                //Aqui vem o código que será mostrado no celular:

                <View>
                    <View>
                        <Text>
                            Aqui, temos outra View(Seria meio que uma div... mas mais Reactzada;);
                        </Text>
                    </View>

                    <View>
                        <Text>Aqui tem um texto</Text>

                        <Text>Aprendendo React Native</Text>
                    </View>
                </View> // -> Basicamente igual ao div no React
            );
        };
    */

//Fim
