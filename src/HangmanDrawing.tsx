export default function HangmanDrawing() {
  const head = (
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid black',
        position: 'absolute',
        top: '50px',
        right: '-30px',
      }}
    />
  );
  const body = (
    <div
      style={{
        width: '10px',
        height: '100px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '120px',
        right: 0,
      }}
    />
  );
  const rightArm = (
    <div
      style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '150px',
        right: '-90px',
        rotate: '-30deg',
        transformOrigin: 'left right',
      }}
    />
  );
  const lefttArm = (
    <div
      style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '150px',
        right: '1px',
        rotate: '-330deg',
        transformOrigin: 'left right',
      }}
    />
  );
  const rightLeg = (
    <div
      style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '245px',
        right: '-81px',
        rotate: '-500deg',
        transformOrigin: 'left right',
      }}
    />
  );
  const leftLeg = (
    <div
      style={{
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '247px',
        right: '-5px',
        rotate: '-40deg',
        transformOrigin: 'left right',
      }}
    />
  );

  return (
    <div style={{ position: 'relative' }}>
      {head}
      {body}
      {rightArm}
      {lefttArm}
      {rightLeg}
      {leftLeg}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: '10px',
          width: '200px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      />
      <div style={{ height: '10px', width: '250px', background: 'black' }} />
    </div>
  );
}
