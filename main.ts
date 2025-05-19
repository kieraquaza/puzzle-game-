info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    level = 1
    tiles.setCurrentTilemap(tilemap`level`)
    grid.place(mySprite, tiles.getTileLocation(0, 8))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
    game.showLongText("You have successfully escaped the tower ", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    level = 2
    tiles.setCurrentTilemap(tilemap`level0`)
    grid.place(mySprite, tiles.getTileLocation(7, 15))
})
let level = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Mc sprite`, SpriteKind.Player)
let maps = [tilemap`level1`, tilemap`level`, tilemap`level0`]
scene.cameraFollowSprite(mySprite)
level = 0
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
grid.place(mySprite, tiles.getTileLocation(0, 7))
info.startCountdown(180)
