//DTO responsável por receber dados de criação de um novo usuário
//DTO é "data transfer object" ou objeto de transferencia de dados, ou seja, é um tipo de classe para transferir dados

import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, ApiProperty } from "class-validator";

export class criaFilmeDTO{
    @IsString()
    @IsNotEmpty({message: "nome não pode ser vazio"})
    @ApiProperty({
        example: "Sei la",
        description: "nome do filme"
    })
    nome: string;
    
    @IsNumber()
    @ApiProperty({
        example: "120",
        description: "duração do filme"
    })
    duracao: number;

    @IsString()
    @ApiProperty({
        example: "filme conta a historia",
        description: "sinopse do filme"
    })
    sinopse: string;

    @IsString()
    @ApiProperty({
        example: "1890",
        description: "amp de lançamento do filme"
    })
    ano: string;

    @IsString()
    @ApiProperty({
        example: "ação",
        description: "genero do filme"
    })
    genero: string;
}