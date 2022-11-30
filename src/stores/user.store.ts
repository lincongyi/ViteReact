import { makeAutoObservable, runInAction } from 'mobx'
import { getUerProfile } from '@api/login'

type TProfile = {
  username:string,
  phone:string,
  authority:number
}

class User {
  constructor () {
    makeAutoObservable(this)
  }

  profile:TProfile | undefined

  getProfile = async ():Promise<TProfile | undefined> => {
    const { data } = await getUerProfile()
    const { username, phone, authority } = data
    runInAction(() => {
      this.profile = { username, phone, authority }
    })
    return this.profile
  }

  setProfile = (profile: TProfile) => {
    this.profile = profile
    return this.profile
  }
}

export default User
