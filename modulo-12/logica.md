## Algoritmo travessia segura.

- Um homem precisa atravessar um rio com um barco que possui capacidade apenas para carregar ele mesmo e mais um dos seus três pertences, que são: um lobo, uma cabra e um maço de alfafa. Em cada viagem só poderá ir o homem e apenas um de seus pertences. A seguinte regra deverá ser respeitada: o lobo não pode ficar sozinho com a cabra e nem a cabra sozinha com o maço de alfafa. Escreva um algoritmo para fazer a travessia dos pertences que estão em uma margem do rio para a outra.

## Lógica.

1. 1ª travessia: homem + cabra 
    - fica lobo + alfafa

2. 1ª volta: homem

3. 2ª travessia: homem + lobo 
    - fica alfafa

3. 2ª volta: homem + cabra

4. 3ª travessia: homem + alfafa 
    - fica cabra

5. 3ª volta: homem

6. 4ª travessia: homem + cabra 
    - travessia completa