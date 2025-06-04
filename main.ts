controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    200,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.gameOver(false)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim4`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim3`,
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim1`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    level = 2
    tiles.setCurrentTilemap(tilemap`level0`)
    grid.place(mySprite, tiles.getTileLocation(7, 15))
    info.stopCountdown()
})
let level = 0
let mySprite: Sprite = null
game.setGameOverScoringType(game.ScoringType.LowScore)
game.showLongText("You are a slime cube stuck in a maze and your goal is to escape and absorb the treasure", DialogLayout.Bottom)
game.showLongText("The controls are the arrow keys to move and z to reset", DialogLayout.Bottom)
mySprite = sprites.create(assets.image`Mc sprite`, SpriteKind.Player)
let maps = [tilemap`level1`, tilemap`level`, tilemap`level0`]
scene.cameraFollowSprite(mySprite)
level = 0
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
grid.place(mySprite, tiles.getTileLocation(0, 7))
info.startCountdown(180)
music.play(music.stringPlayable(music.convertRTTTLToMelody("Take On Me:o=5,d=8,b=160,b=160:f#,f#,f#,d,p,b4,p,e,p,e,p,e,g#,g#,a,b,a,a,a,e,p,d,p,f#,p,f#,p,f#,e,e,f#,e,f#,f#,f#,d,p,b4,p,e,p,e,p,e,g#,g#,a,b,a,a,a,e,p,d,p,f#,"), 400), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
