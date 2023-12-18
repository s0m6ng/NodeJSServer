"use strict"


//import  io  from "socket.io";
import { Socket } from "socket.io";
//const RoomPlayer = require('./RoomPlayer')
import RoomPlayer from "./RoomPlayer"; 
import UserInfo from "./UserInfo";


//룸에서 유저상태 enum 상수
const ERoomUserSate = {
  Empty : 0,    // 빈슬롯
  Enter : 1,    // 입장된 상태
  Ready : 2,    // 준비된 상태
};



//룸 정보
export class Room {
    roomId : string;
    masterClientId : string;
    maxPlayer : number;
    isOpen : boolean;
    roomState : number;
    removedFromList : boolean;
    players : RoomPlayer [];
    constructor( roomId:string, masterClientId:string, maxPlayer = 4) {
      this.roomId = roomId;                 // 룸id 또는 룸 이름
      this.masterClientId = masterClientId; // 마스터 클라이언트 id
      this.maxPlayer= maxPlayer;  // 최대 플레이어 수
      this.isOpen = true;       // true: 입장가능, false: 입장불가능(룸리스트에서 숨기기)
      this.roomState = 0;       // 0 : 대기중 , 1 : 게임중   
      this.removedFromList = false;  //룸 리스트에서 삭제 되었는지 여부
      this.players = [];       // 룸 유저리스트 (RoomPlayer 리스트)
    }
    
    Name() : string { return this.roomId; }
  
    // Player 숫자
    PlayerCount() : number {
      return this.players.length;
    }

    // 생성시 마스터 플레이어 정보 셋팅
    Initialize( userInfo:UserInfo ) {
      const kPlayer = new RoomPlayer(true, true);

      kPlayer.userInfo = userInfo;
      kPlayer.slotNo = this.players.length+1;
      kPlayer.userState = ERoomUserSate.Enter;    // 1 = Enter_State
      
      this.players.push(kPlayer);
      this.roomState = 0;
      this.removedFromList = false;
    }
    
    AddPlayer( userInfo :UserInfo) {
      const kPlayer = new RoomPlayer(false, true);
      kPlayer.userInfo = userInfo;
      kPlayer.slotNo = this.players.length+1;    // 슬롯번호는 1부터 시작한다.
      kPlayer.userState = ERoomUserSate.Enter;    // 1 = Enter_State
      this.players.push(kPlayer);
      return kPlayer;
    }

    // Player 삭제
    RemovePlayer(userId : string) {
      var idx = this.players.findIndex((data)=>{ return data.Name()==userId; });
      if( idx != -1){
        this.players.splice(idx, 1);
      }
    }
    
    // Player 찾기
    FindPlayer( userId : string) : RoomPlayer | undefined {
      const kPlayer = this.players.find( (element) => {
         return (element.Name() == userId); 
      });
      return kPlayer;
    }
  
    FirstPlayer() : RoomPlayer | undefined {
      if( this.players.length > 0 )
        return this.players[0];
      return undefined;
    }
  
    // 룸 나간 유저 브로드 캐스팅하기
    async SendLeaveRoomPlayer( socket:Socket, userId:string ) {
      await socket.broadcast.to(this.roomId).emit('notify_leave_room', {"id": userId} );
    }
  }


  export default Room;
  //module.exports = Room;
  