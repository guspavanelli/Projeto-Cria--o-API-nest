//classe responsável por definir padrão para alteração de usuários
//DTO é "data transfer object" ou objeto de transferencia de dados, ou seja, é um tipo de classe para transferir dados
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class alteraUsuarioDTO{

    //decorators de tipo e validação, são responsáveis por darem padrão e validar informações importantes nos DTOs
    //podem ser prédefinidos ou podem ser criados de forma customizada(exemplo email unico)
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