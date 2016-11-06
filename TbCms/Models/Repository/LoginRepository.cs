using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Diagnostics;
using System.Linq.Expressions;
using System.Web.Mvc;
using TbCms.Models;
using System.Data.Entity;

namespace TbCms.Models.Repository
{
    /// <summary>
    /// ログインリポジトリ.
    /// </summary>
    public class LoginRepository : ILoginRepository
    {

        private TbCmsContext db = new TbCmsContext();

        /// <summary>
        /// ログインチェック.
        /// </summary>
        /// <returns></returns>
        public LoginViewModel CheckLogin(LoginViewModel reqModel)
        {
            LoginViewModel retModel = new LoginViewModel();

            // 返却モデルの固定値部分をセット.
            retModel.system_user_id = reqModel.system_user_id;
            retModel.password = reqModel.password;

            // 削除されていないかつID/パスワードが一致したものを抽出.
            var idExist = db.m_system_users
                .Where(a => a.system_user_id == reqModel.system_user_id)
                .Where(a => a.password == reqModel.password)
                .Where(a => a.delete_state == "0")
                .Any();

            retModel.IsSuccess = idExist ? true : false;

            return retModel;
        }

    }
}