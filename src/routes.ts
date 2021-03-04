import { Router, Request, Response } from 'express';

const routes = Router();

//new
//moviment

routes.get('/new', (request: Request, response: Response) => {
    return response.json(
        [
            { line: 0, column: 0, pieceName: 'darkHook' },
            { line: 0, column: 1, pieceName: 'darkKnight' },
            { line: 0, column: 2, pieceName: 'darkBishop' },
            { line: 0, column: 3, pieceName: 'darkQueen' },
            { line: 0, column: 4, pieceName: 'darkKing' },
            { line: 0, column: 5, pieceName: 'darkBishop' },
            { line: 0, column: 6, pieceName: 'darkKnight' },
            { line: 0, column: 7, pieceName: 'darkHook' },
            { line: 1, column: 0, pieceName: 'darkPawn' },
            { line: 1, column: 1, pieceName: 'darkPawn' },
            { line: 1, column: 2, pieceName: 'darkPawn' },
            { line: 1, column: 3, pieceName: 'darkPawn' },
            { line: 1, column: 4, pieceName: 'darkPawn' },
            { line: 1, column: 5, pieceName: 'darkPawn' },
            { line: 1, column: 6, pieceName: 'darkPawn' },
            { line: 1, column: 7, pieceName: 'darkPawn' },
            { line: 6, column: 0, pieceName: 'lightPawn' },
            { line: 6, column: 1, pieceName: 'lightPawn' },
            { line: 6, column: 2, pieceName: 'lightPawn' },
            { line: 6, column: 3, pieceName: 'lightPawn' },
            { line: 6, column: 4, pieceName: 'lightPawn' },
            { line: 6, column: 5, pieceName: 'lightPawn' },
            { line: 6, column: 6, pieceName: 'lightPawn' },
            { line: 6, column: 7, pieceName: 'lightPawn' },
            { line: 7, column: 0, pieceName: 'lightHook' },
            { line: 7, column: 1, pieceName: 'lightKnight' },
            { line: 7, column: 2, pieceName: 'lightBishop' },
            { line: 7, column: 3, pieceName: 'lightQueen' },
            { line: 7, column: 4, pieceName: 'lightKing' },
            { line: 7, column: 5, pieceName: 'lightBishop' },
            { line: 7, column: 6, pieceName: 'lightKnight' },
            { line: 7, column: 7, pieceName: 'lightHook' }
        ],
    )
})

routes.get('/movement', (request: Request, response: Response) => {
    
});

export default routes;

