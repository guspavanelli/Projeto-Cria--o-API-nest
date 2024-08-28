//classe responsável por definir padrão para alteração de usuários
//DTO é "data transfer object" ou objeto de transferencia de dados, ou seja, é um tipo de classe para transferir dados
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, ApiPropertyOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class alteraFilmeDTO{

    //decorators de tipo e validação, são responsáveis por darem padrão e validar informações importantes nos DTOs
    //podem ser prédefinidos ou podem ser criados de forma customizada(exemplo email unico)
    @IsString()
    @IsNotEmpty({message: "nome não pode ser vazio"})
    @IsOptional()
    @ApiPropertyOptional({
        example: "Sei la",
        description: "nome do filme"
    })
    nome: string;
    
    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional({
        example: "120",
        description: "duração do filme"
    })
    duracao: number;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "filme conta a historia",
        description: "sinopse do filme"
    })
    sinopse: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "1890",
        description: "amp de lançamento do filme"
    })
    ano: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "ação",
        description: "genero do filme"
    })
    genero: string;
}