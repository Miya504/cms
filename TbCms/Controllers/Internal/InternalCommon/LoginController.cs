using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TbCms.Models;
using TbCms.Models.Repository;

namespace TbCms.Controllers.Internal.InternalCommon
{
    public class LoginController : Controller
    {
        /// <summary>
        /// リポジトリクラス.
        /// </summary>
        private ILoginRepository _rep;

        /// <summary>
        /// コンストラクタ.
        /// </summary>
        public LoginController() : this(new LoginRepository()) { }

        /// <summary>
        /// 第2コンストラクタ.
        /// </summary>
        /// <param name="rep"></param>
        public LoginController(ILoginRepository rep)
        {
            // リポジトリクラスを紐づける.
            _rep = rep;
        }

        /// <summary>
        /// ログイン(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Login()
        {
            var loginViewModel = new LoginViewModel();

            // クッキー情報がある場合はそこから復元する.
            if (Request.Cookies["LoginUserId"] != null)
            {
                loginViewModel.system_user_id = Request.Cookies["LoginUserId"].Value;
                if (loginViewModel.system_user_id != null && loginViewModel.system_user_id != string.Empty)
                {
                    loginViewModel.IsSaveId = true;
                }
            }
            if (Request.Cookies["LoginPassword"] != null)
            {
                loginViewModel.password = Request.Cookies["LoginPassword"].Value;
            }

            return View(loginViewModel);
        }

        /// <summary>
        /// ログイン(ログインボタン).
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Login(LoginViewModel model)
        {
            // パスワード保存状態を更新する.
            if (model.IsSaveId)
            {
                // ユーザID.
                var cookie = new HttpCookie("LoginUserId");
                cookie.Value = model.system_user_id;
                cookie.Expires = DateTime.MaxValue; // 期間は最大.
                Response.Cookies.Add(cookie);

                // パスワード.
                cookie = new HttpCookie("LoginPassword");
                cookie.Value = model.password;
                cookie.Expires = DateTime.MaxValue; // 期間は最大.
                Response.Cookies.Add(cookie);
            }
            else
            {
                // クッキーの削除.
                var cookie = new HttpCookie("LoginUserId");
                cookie.Value = null;
                Response.Cookies.Add(cookie);
                cookie = new HttpCookie("LoginPassword");
                cookie.Value = null;
                Response.Cookies.Add(cookie);
            }

            // ログインチェック.
            var db = new TbCmsContext();

            var loginViewModel = _rep.CheckLogin(model);

            if (loginViewModel.IsSuccess)
            {
                // ログイン成功.

                // セッションに必要な情報を設定.
                Session["IsAdministrator"] = loginViewModel.IsAdmin;
                Session["IsCreateNews"] = loginViewModel.IsCreateNews;
                Session["IsCreateContents"] = loginViewModel.IsCreateContents;

                Session["LoginId"] = loginViewModel.system_user_id;
                
                // メニュー画面に遷移.
                return Redirect("../Menu/Menu");
            }
            else
            {
                // ログインできない場合はViewの移動をしない.
                return View(loginViewModel);
            }
        }
    }
}