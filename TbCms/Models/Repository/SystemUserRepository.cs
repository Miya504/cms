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
    /// [マスタメンテ]システムユーザリポジトリ.
    /// </summary>
    public class SystemUserRepository : ISystemUserRepository
    {

        private TbCmsContext db = new TbCmsContext();

        /// <summary>
        /// 初回取得(全件表示).
        /// </summary>
        /// <returns></returns>
        public SystemUserListViewModel GetFirstListData()
        {
            SystemUserListViewModel retModel = new SystemUserListViewModel();

            // 返却モデルの固定値部分をセット.
            retModel.system_user_name = string.Empty;
            retModel.ChkNormal = true;      // 通常のみ.
            retModel.ChkTempDel = false;
            retModel.ChkDelete = false;

            // 削除されていないもののみ抽出.
            var list = db.m_system_users
                .Where(a => a.delete_state == "0")
                .Select(
                    a => new SystemUserTableViewModel
                        {
                            system_user_id = a.system_user_id,
                            system_user_name = a.system_user_name,
                            role_name = a.m_roles.role_name,
                            mail_address = a.mail_address,
                            password = a.password
                        }
                    )
                ;

            // 結果をリストに詰める.
            retModel.TableList = list.ToArray();

            return retModel;
        }

        /// <summary>
        /// 検索結果取得.
        /// </summary>
        /// <returns></returns>
        public SystemUserListViewModel GetSarchListData(SystemUserListViewModel reqModel)
        {
            SystemUserListViewModel retModel = new SystemUserListViewModel();

            // リクエストパラメータを返却モデルにコピー.
            retModel.system_user_name = reqModel.system_user_name;
            retModel.ChkNormal = reqModel.ChkNormal;
            retModel.ChkTempDel = reqModel.ChkTempDel;
            retModel.ChkDelete = reqModel.ChkDelete;

            // 条件を後にするため必要なSELECTのみ実行.
            var list = db.m_system_users
                .Select(
                    a => new SystemUserTableViewModel
                        {
                            system_user_id = a.system_user_id,
                            system_user_name = a.system_user_name,
                            role_name = a.m_roles.role_name,
                            mail_address = a.mail_address,
                            password = a.password,
                            delete_state = a.delete_state
                        }
                    )
                ;

            // システムユーザ名.
            if (reqModel.system_user_name != null)
            {
                list = list.Where(a => a.system_user_name.Contains(reqModel.system_user_name));
            }

            // 削除状態.
            // チェックボックスにチェックがあるもののみ対象とする.
            var delList = new List<string>();
            if (reqModel.ChkNormal)
            {
                delList.Add("0");
            }
            if (reqModel.ChkTempDel)
            {
                delList.Add("1");
            }
            if (reqModel.ChkDelete)
            {
                delList.Add("2");
            }

            // 1つ以上チェックがあれば条件に追加.
            if (delList.Count > 0)
            {
                list = list.Where(a => delList.Contains(a.delete_state));
            }

            // 結果をリストに詰める.
            retModel.TableList = list.ToArray();

            return retModel;
        }

        /// <summary>
        /// 新規登録情報取得.
        /// </summary>
        /// <returns></returns>
        public SystemUserInputViewModel GetInputNewData()
        {
            SystemUserInputViewModel retModel = new SystemUserInputViewModel();

            // 返却モデルの固定値部分をセット.
            retModel.system_user_name = string.Empty;
            retModel.delete_state = "0";

            return retModel;
        }

        /// <summary>
        /// 新規登録.
        /// </summary>
        /// <returns></returns>
        public bool RegistrationInputNewData(SystemUserInputViewModel reqModel)
        {
            bool retVal = false;

            // DB登録に必要な情報を成形する.
            m_system_users newModel = new m_system_users();

            // 固有項目.
            newModel.role_id = reqModel.role_id;
            newModel.system_user_name = reqModel.system_user_name;
            newModel.mail_address = reqModel.mail_address;
            newModel.password = reqModel.password;

            // 削除状態.
            newModel.delete_state = reqModel.delete_state;

            // 必須項目.
            newModel.create_function = "aaaaaa";
            newModel.create_date_time = DateTime.Now;            
            newModel.create_user = "Inbility";
            
            db.m_system_users.Add(newModel);

            try
            {
                // DB登録.
                db.SaveChanges();

                // DB登録に成功したので、返却値を更新.
                retVal = true;
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException ex)
            {
                foreach (var errors in ex.EntityValidationErrors)
                {
                    foreach (var error in errors.ValidationErrors)
                    {
                        Trace.WriteLine(error.ErrorMessage);    // VisualStudioの出力に表示.
                    }
                }
            }

            return retVal;
        }

        /// <summary>
        /// 編集情報取得.
        /// </summary>
        /// <returns></returns>
        public SystemUserInputViewModel GetInputEditData(string id)
        {            
            // 指定IDの情報を取得.
            var temp = db.m_system_users
                .Where(a => a.system_user_id == id)
                .Select(
                    a => new SystemUserInputViewModel
                    {
                        system_user_id = a.system_user_id,
                        system_user_name = a.system_user_name,
                        role_id = a.m_roles.role_id,
                        role_name = a.m_roles.role_name,
                        mail_address = a.mail_address,
                        password = a.password,
                        delete_state = a.delete_state
                    }
                    )
                ;

            return (SystemUserInputViewModel)temp.First();
            
        }

        /// <summary>
        /// 編集結果登録.
        /// </summary>
        /// <returns></returns>
        public bool RegistrationInputEditData(SystemUserInputViewModel reqModel)
        {
            bool retVal = false;

            // 指定IDの情報を取得.
            var updModel = db.m_system_users.Find(reqModel.system_user_id);

            // DB登録に必要な情報を成形する.

            // 固有項目.
            updModel.role_id = reqModel.role_id;
            updModel.system_user_name = reqModel.system_user_name;
            updModel.mail_address = reqModel.mail_address;
            updModel.password = reqModel.password;

            // 必須項目.
            updModel.update_function = "aaaaaa";
            updModel.update_date_time = DateTime.Now;
            updModel.update_system_user = "Inbility";

            //db.m_system_users.Attach(updModel.First());
            db.Entry(updModel).State = EntityState.Modified;

            try
            {
                // DB登録.
                db.SaveChanges();

                // DB登録に成功したので、返却値を更新.
                retVal = true;
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException ex)
            {
                foreach (var errors in ex.EntityValidationErrors)
                {
                    foreach (var error in errors.ValidationErrors)
                    {
                        Trace.WriteLine(error.ErrorMessage);    // VisualStudioの出力に表示.
                    }
                }
            }

            return retVal;
        }

        /// <summary>
        /// システムユーザIDの検証.
        /// </summary>
        /// <returns></returns>
        public bool IsSystemUserIdAvailable(string systemUserId)
        {
            // 指定IDの情報を取得.
            var idExist = db.m_system_users
                .Where(a => a.system_user_id == systemUserId)
                .Any();

            var chkResult = idExist ? false : true;

            //if (idExist) { return false; } //存在するときはFalse.
            //return true;

            return chkResult;

        }
    }
}